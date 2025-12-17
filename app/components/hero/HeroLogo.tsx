interface HeroLogoProps {
  progress: number;
}

export function HeroLogo({ progress }: HeroLogoProps) {
  // Calculate animations based on scroll progress
  const scale = Math.max(0.2, 1 - progress * 2.5);
  const opacity = Math.max(0, 1 - progress * 3.5);
  const translateY = progress * 150;

  return (
    <div
      style={{
        position: "absolute",
        top: "8%",
        left: "50%",
        transform: `translateX(-50%) scale(${scale}) translateY(-${translateY}px)`,
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        opacity,
        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <img
        src="/logo/icon.png"
        alt="Xala"
        style={{
          width: "120px",
          height: "120px",
          filter: "drop-shadow(0 0 50px rgba(93,230,122,0.5))",
          transition: "all 0.8s ease",
        }}
      />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",
          fontWeight: 500,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          transition: "all 0.6s ease",
        }}
      >
        Revolutionising the Future
      </span>
    </div>
  );
}
