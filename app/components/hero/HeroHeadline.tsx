import { cn } from "~/lib/utils";

interface HeroHeadlineProps {
  /** Scroll progress 0-1 */
  progress: number;
}

export function HeroHeadline({ progress }: HeroHeadlineProps) {
  const opacity = Math.max(0, 1 - progress * 5);
  const translateY = progress * 80;

  return (
    <div
      className={cn(
        "absolute top-[28%] left-1/2 z-25",
        "text-center max-w-[900px] px-8",
        "transition-all duration-800"
      )}
      style={{
        transform: `translateX(-50%) translateY(${translateY}px)`,
        opacity,
      }}
    >
      <h1
        className={cn(
          "font-display text-display-md font-normal",
          "leading-[1.8] text-text-secondary",
          "drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        )}
      >
        Inside This Box Lies the{" "}
        <strong
          className={cn(
            "font-bold text-gradient-xala",
            "animate-shimmer bg-[length:300%_100%]",
            "[text-shadow:none]"
          )}
        >
          Future of Technology
        </strong>{" "}
        — Engineered by Xala.
      </h1>
    </div>
  );
}
