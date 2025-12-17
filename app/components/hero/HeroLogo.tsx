/**
 * Hero Logo Component
 * Centered hero logo that fades out on scroll
 * (Header logo is now in ProgressBar component)
 */

interface HeroLogoProps {
  progress: number;
}

export function HeroLogo({ progress }: HeroLogoProps) {
  // Fade out as user scrolls (complete by ~8% scroll)
  const t = Math.min(1, progress * 12);
  const opacity = Math.max(0, 1 - t * 1.2);
  const scale = 1 - 0.1 * t;

  return (
    <div
      style={{
        position: "absolute",
        top: "8%",
        left: "50%",
        transform: `translateX(-50%) scale(${scale})`,
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        opacity,
        pointerEvents: opacity > 0.3 ? "auto" : "none",
      }}
    >
      <img
        src="/logo/icon.png"
        alt="Xala"
        style={{
          width: "100px",
          height: "100px",
          filter: "drop-shadow(0 0 40px rgba(93,230,122,0.5))",
        }}
      />
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          whiteSpace: "nowrap",
        }}
      >
        Revolutionising the Future
      </span>
    </div>
  );
}
