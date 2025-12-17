import { useState, useEffect, useCallback, useRef } from "react";
import { getFrameFilename } from "~/lib/utils";

interface UseFramePreloaderOptions {
  /** Total number of frames to load */
  frameCount: number;
  /** Base path to frames directory */
  basePath: string;
  /** Start loading immediately */
  autoLoad?: boolean;
}

interface FramePreloaderState {
  /** Array of loaded image elements */
  frames: HTMLImageElement[];
  /** Number of frames loaded */
  loadedCount: number;
  /** Loading progress 0-100 */
  progress: number;
  /** Whether still loading */
  isLoading: boolean;
  /** Any error that occurred */
  error: Error | null;
}

/**
 * Preload animation frame images with progress tracking
 */
export function useFramePreloader({
  frameCount,
  basePath,
  autoLoad = true,
}: UseFramePreloaderOptions): FramePreloaderState & { startLoading: () => void } {
  const [state, setState] = useState<FramePreloaderState>({
    frames: [],
    loadedCount: 0,
    progress: 0,
    isLoading: false,
    error: null,
  });

  const framesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(0);
  const hasStarted = useRef(false);

  const loadFrame = useCallback(
    (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          framesRef.current[index] = img;
          loadedRef.current++;

          setState((prev) => ({
            ...prev,
            frames: [...framesRef.current],
            loadedCount: loadedRef.current,
            progress: Math.round((loadedRef.current / frameCount) * 100),
          }));

          resolve(img);
        };

        img.onerror = () => {
          // Still resolve to not block other frames
          loadedRef.current++;
          setState((prev) => ({
            ...prev,
            loadedCount: loadedRef.current,
            progress: Math.round((loadedRef.current / frameCount) * 100),
          }));
          resolve(img);
        };

        img.src = `${basePath}/${getFrameFilename(index)}`;
      });
    },
    [basePath, frameCount]
  );

  const startLoading = useCallback(async () => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      // Initialize frames array
      framesRef.current = new Array(frameCount);
      loadedRef.current = 0;

      // Load all frames in parallel
      const promises = Array.from({ length: frameCount }, (_, i) => loadFrame(i));
      await Promise.all(promises);

      setState((prev) => ({
        ...prev,
        isLoading: false,
        frames: [...framesRef.current],
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error : new Error("Failed to load frames"),
      }));
    }
  }, [frameCount, loadFrame]);

  useEffect(() => {
    if (autoLoad) {
      startLoading();
    }
  }, [autoLoad, startLoading]);

  return { ...state, startLoading };
}
