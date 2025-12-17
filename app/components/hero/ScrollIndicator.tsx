interface ScrollIndicatorProps {
  isVisible: boolean;
}

export function ScrollIndicator({ isVisible }: ScrollIndicatorProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "14%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 25,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Background blur to cover watermark */}
      <div
        style={{
          position: "absolute",
          inset: "-1rem -2rem",
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(3,3,5,0.85) 0%, rgba(3,3,5,0.5) 50%, transparent 80%)",
          filter: "blur(6px)",
          zIndex: -1,
        }}
      />

      {/* Lock icon - smaller */}
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        style={{
          filter: "drop-shadow(0 0 6px rgba(93,230,122,0.4))",
        }}
      >
        {/* Lock body */}
        <rect
          x="1"
          y="7"
          width="12"
          height="8"
          rx="1.5"
          stroke="rgba(93,230,122,0.7)"
          strokeWidth="1"
          fill="rgba(93,230,122,0.1)"
        />
        {/* Lock shackle */}
        <path
          d="M3.5 7V5C3.5 3.067 5.067 1.5 7 1.5C8.933 1.5 10.5 3.067 10.5 5V7"
          stroke="rgba(93,230,122,0.5)"
          strokeWidth="1"
          fill="none"
        />
        {/* Keyhole */}
        <circle
          cx="7"
          cy="10.5"
          r="1"
          fill="rgba(93,230,122,0.9)"
        />
      </svg>

      {/* Text */}
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        Scroll to Unlock
      </span>

      {/* Animated dots */}
      <div style={{ display: "flex", gap: "3px", marginLeft: "0.25rem" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "rgba(93,230,122,0.5)",
              animation: `bounce-dot 1.5s ease-in-out infinite ${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-3px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
