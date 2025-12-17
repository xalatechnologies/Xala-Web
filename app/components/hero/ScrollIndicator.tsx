import { cn } from "~/lib/utils";

interface ScrollIndicatorProps {
  /** Whether the indicator is visible */
  isVisible: boolean;
}

export function ScrollIndicator({ isVisible }: ScrollIndicatorProps) {
  return (
    <div
      className={cn(
        "absolute bottom-12 left-1/2 -translate-x-1/2 z-30",
        "flex flex-col items-center gap-4",
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isVisible}
    >
      <span className="text-label-sm font-semibold tracking-[0.35em] uppercase text-text-dim">
        Scroll to Unlock
      </span>
      <div className="relative w-6 h-10 border-2 border-border rounded-xl">
        <div
          className={cn(
            "absolute top-1.5 left-1/2 -translate-x-1/2",
            "w-1 h-2 rounded-sm",
            "bg-xala shadow-[0_0_10px_var(--xala-green-glow)]",
            "animate-scroll-bounce"
          )}
        />
      </div>
    </div>
  );
}
