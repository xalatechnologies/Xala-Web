interface ScrollIndicatorProps {
  isVisible: boolean;
}

export function ScrollIndicator({ isVisible }: ScrollIndicatorProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "3rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.5s ease",
      }}
    >
      <span
        style={{
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        Scroll to Unlock
      </span>
      <div
        style={{
          width: "24px",
          height: "40px",
          border: "2px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "8px",
            background: "#5DE67A",
            borderRadius: "2px",
            animation: "scroll-bounce 2s ease-in-out infinite",
            boxShadow: "0 0 10px rgba(93,230,122,0.5)",
          }}
        />
      </div>

      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
