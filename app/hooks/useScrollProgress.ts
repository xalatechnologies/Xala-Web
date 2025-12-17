import { useState, useEffect, useCallback, useRef } from "react";
import { easeOutCubic, clamp, rafThrottle } from "~/lib/utils";

interface UseScrollProgressOptions {
  /** Reference element to track scroll against */
  containerRef: React.RefObject<HTMLElement>;
  /** Apply easing function to progress */
  eased?: boolean;
  /** Custom easing function */
  easingFn?: (t: number) => number;
}

interface ScrollProgressState {
  /** Raw progress 0-1 */
  progress: number;
  /** Eased progress 0-1 */
  easedProgress: number;
  /** Scroll direction: 1 = down, -1 = up, 0 = none */
  direction: number;
  /** Whether currently scrolling */
  isScrolling: boolean;
}

/**
 * Track scroll progress through a container element
 * Returns progress from 0 (top) to 1 (fully scrolled through)
 */
export function useScrollProgress({
  containerRef,
  eased = true,
  easingFn = easeOutCubic,
}: UseScrollProgressOptions): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>({
    progress: 0,
    easedProgress: 0,
    direction: 0,
    isScrolling: false,
  });

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();

  const calculateProgress = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollable = container.offsetHeight - window.innerHeight;

    if (scrollable <= 0) return;

    const rawProgress = clamp(-rect.top / scrollable, 0, 1);
    const easedProgress = eased ? easingFn(rawProgress) : rawProgress;

    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? 1 : currentScrollY < lastScrollY.current ? -1 : 0;
    lastScrollY.current = currentScrollY;

    setState({
      progress: rawProgress,
      easedProgress,
      direction,
      isScrolling: true,
    });

    // Reset isScrolling after scroll stops
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setState((prev) => ({ ...prev, isScrolling: false }));
    }, 150);
  }, [containerRef, eased, easingFn]);

  useEffect(() => {
    // SSR guard
    if (typeof window === "undefined") return;

    const throttledCalculate = rafThrottle(calculateProgress);

    window.addEventListener("scroll", throttledCalculate, { passive: true });
    window.addEventListener("resize", throttledCalculate);

    // Initial calculation
    calculateProgress();

    return () => {
      window.removeEventListener("scroll", throttledCalculate);
      window.removeEventListener("resize", throttledCalculate);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [calculateProgress]);

  return state;
}

/**
 * Simple hook to check if scroll has passed a threshold
 */
export function useScrollThreshold(
  progress: number,
  enterThreshold: number,
  exitThreshold?: number
): boolean {
  const exit = exitThreshold ?? 1;
  return progress > enterThreshold && progress < exit;
}
