import { cn } from "~/lib/utils";

interface HeroLogoProps {
  /** Scroll progress 0-1 */
  progress: number;
}

export function HeroLogo({ progress }: HeroLogoProps) {
  // Calculate animations based on scroll progress
  const scale = Math.max(0.2, 1 - progress * 2.5);
  const opacity = Math.max(0, 1 - progress * 3.5);
  const translateY = progress * 150;

  return (
    <div
      className={cn(
        "absolute top-[8%] left-1/2 z-20",
        "flex flex-col items-center gap-6",
        "transition-all duration-1000 ease-out-cubic"
      )}
      style={{
        transform: `translateX(-50%) scale(${scale}) translateY(-${translateY}px)`,
        opacity,
      }}
    >
      <img
        src="/assets/logo/icon.png"
        alt="Xala Technologies logo"
        className={cn(
          "w-[120px] h-[120px]",
          "drop-shadow-[0_0_50px_var(--xala-green-glow)]",
          "transition-all duration-800"
        )}
      />
      <span
        className={cn(
          "font-body text-label-lg font-medium",
          "tracking-[0.4em] uppercase",
          "text-text-muted",
          "transition-all duration-600"
        )}
      >
        Revolutionising the Future
      </span>
    </div>
  );
}
