interface HeroHeadlineProps {
  progress: number;
}

export function HeroHeadline({ progress }: HeroHeadlineProps) {
  // Sync fade timing with logo (complete by ~8% scroll)
  const t = Math.min(1, progress * 12);
  const opacity = Math.max(0, 1 - t * 1.2);
  const translateY = t * 40;

  return (
    <div
      style={{
        position: "absolute",
        top: "28%",
        left: "50%",
        transform: `translateX(-50%) translateY(${translateY}px)`,
        zIndex: 25,
        textAlign: "center",
        maxWidth: "1000px",
        padding: "0 2rem",
        opacity,
        transition: "all 0.8s ease",
      }}
    >
      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(1.35rem, 3vw, 2.25rem)",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.85)",
          textShadow: "0 2px 30px rgba(0,0,0,0.5)",
          letterSpacing: "-0.01em",
        }}
      >
        Inside This Box Lies the{" "}
        <strong
          style={{
            fontWeight: 700,
            background: "linear-gradient(135deg, #7AFF97, #5DE67A, #00d4ff, #7AFF97)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 6s linear infinite",
            textShadow: "none",
          }}
        >
          Future of Technology
        </strong>{" "}
        — Engineered by Xala.
      </h1>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
