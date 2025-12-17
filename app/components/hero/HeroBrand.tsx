interface HeroBrandProps {
  isVisible: boolean;
}

export function HeroBrand({ isVisible }: HeroBrandProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "18%",
        left: "50%",
        transform: isVisible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(30px)",
        zIndex: 25,
        opacity: isVisible ? 1 : 0,
        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {/* Main label with glass background */}
      <div
        style={{
          position: "relative",
          padding: "1rem 3rem",
          background: "linear-gradient(135deg, rgba(93,230,122,0.1), rgba(255,255,255,0.04))",
          border: "1px solid rgba(93,230,122,0.25)",
          borderRadius: "50px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 80px rgba(93,230,122,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Glow effect behind */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "130%",
            height: "250%",
            background: "radial-gradient(ellipse, rgba(93,230,122,0.18), transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, rgba(255,255,255,0.6), #ffffff, rgba(255,255,255,0.6))",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
          }}
        >
          Architects of Innovation
        </span>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
