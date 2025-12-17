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
        top: "22%",
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
        <span style={{ display: "block" }}>
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
            Future of Innovation
          </strong>
        </span>
        <span style={{ display: "block" }}>Engineered by Xala Technologies</span>
      </h1>

      {/* Scroll to unlock - below slogan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "1.5rem",
          opacity: 0.7,
        }}
      >
        {/* Lock icon */}
        <svg
          width="12"
          height="14"
          viewBox="0 0 14 16"
          fill="none"
          style={{
            filter: "drop-shadow(0 0 4px rgba(93,230,122,0.3))",
          }}
        >
          <rect
            x="1"
            y="7"
            width="12"
            height="8"
            rx="1.5"
            stroke="rgba(93,230,122,0.6)"
            strokeWidth="1"
            fill="rgba(93,230,122,0.1)"
          />
          <path
            d="M3.5 7V5C3.5 3.067 5.067 1.5 7 1.5C8.933 1.5 10.5 3.067 10.5 5V7"
            stroke="rgba(93,230,122,0.4)"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="7" cy="10.5" r="1" fill="rgba(93,230,122,0.8)" />
        </svg>

        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.55rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Scroll to Unlock
        </span>

        {/* Animated dots */}
        <div style={{ display: "flex", gap: "2px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "2px",
                height: "2px",
                borderRadius: "50%",
                background: "rgba(93,230,122,0.4)",
                animation: `bounce-dot 1.5s ease-in-out infinite ${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-2px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
