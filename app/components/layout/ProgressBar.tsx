import { cn } from "~/lib/utils";

interface ProgressBarProps {
  /** Progress value 0-1 */
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className={cn(
        "fixed top-nav left-0 h-0.5 z-[999]",
        "bg-gradient-to-r from-xala via-accent-cyan to-xala",
        "bg-[length:200%_100%] animate-shimmer",
        "origin-left transition-transform duration-100"
      )}
      style={{ transform: `scaleX(${progress})` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
