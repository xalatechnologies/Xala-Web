import { cn } from "~/lib/utils";

interface LoaderProps {
  /** Loading progress 0-100 */
  progress: number;
  /** Whether loading is complete */
  isComplete: boolean;
  /** Whether to show the loader */
  isVisible: boolean;
}

export function Loader({ progress, isComplete, isVisible }: LoaderProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[10000]",
        "flex flex-col items-center justify-center",
        "bg-bg transition-opacity duration-800",
        !isVisible && "opacity-0 pointer-events-none"
      )}
      role="status"
      aria-live="polite"
      aria-label={isComplete ? "Loading complete" : `Loading ${progress}%`}
    >
      {/* Logo */}
      <img
        src="/assets/logo/icon.png"
        alt="Xala Technologies"
        className="w-[120px] mb-10 glow-xala-lg animate-pulse-glow"
      />

      {/* Progress bar */}
      <div className="w-[200px] h-[3px] bg-border rounded-sm overflow-hidden">
        <div
          className={cn(
            "h-full rounded-sm",
            "bg-gradient-to-r from-xala to-xala-bright",
            "shadow-[0_0_20px_var(--xala-green-glow)]",
            "transition-[width] duration-150 ease-out"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status text */}
      <p className="mt-6 text-label-sm font-medium text-text-dim uppercase tracking-widest">
        {isComplete ? "Ready" : `Loading ${progress}%`}
      </p>
    </div>
  );
}
