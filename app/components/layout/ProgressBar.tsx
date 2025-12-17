/**
 * Progress Bar Component
 * Fixed header bar with logo, section indicator, and progress on bottom border
 */

interface ProgressBarProps {
  progress: number;
}

// Section definitions with their scroll ranges
const sections = [
  { id: "intro", label: "Introduction", start: 0, end: 0.12 },
  { id: "pillars", label: "Core Pillars", start: 0.12, end: 0.28 },
  { id: "deliver", label: "What We Deliver", start: 0.28, end: 0.42 },
  { id: "team", label: "Our Team", start: 0.42, end: 0.56 },
  { id: "norchain", label: "NorChain", start: 0.56, end: 0.70 },
  { id: "ai", label: "AI & Technology", start: 0.70, end: 0.84 },
  { id: "contact", label: "Get in Touch", start: 0.84, end: 1.0 },
];

function getCurrentSection(progress: number) {
  for (const section of sections) {
    if (progress >= section.start && progress < section.end) {
      return section;
    }
  }
  return sections[sections.length - 1];
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const currentSection = getCurrentSection(progress);
  const showIndicator = progress > 0.01;
  
  // Logo opacity - fades in as user scrolls
  const logoOpacity = Math.min(1, progress * 15);

  return (
    <>
      {/* Header bar container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "56px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          pointerEvents: "none",
        }}
      >
        {/* Background - appears on scroll */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(3, 3, 5, 0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            opacity: showIndicator ? 1 : 0,
            transition: "opacity 0.4s ease",
            zIndex: 0,
          }}
        />

        {/* Logo - left side, fades in on scroll */}
        <a
          href="/"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            opacity: logoOpacity,
            pointerEvents: logoOpacity > 0.3 ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        >
          <img
            src="/logo/icon.png"
            alt="Xala"
            style={{
              width: "28px",
              height: "28px",
              filter: "drop-shadow(0 0 12px rgba(93,230,122,0.4))",
            }}
          />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              whiteSpace: "nowrap",
            }}
          >
            Revolutionising the Future
          </span>
        </a>

        {/* Section indicator - right side */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            opacity: showIndicator ? 1 : 0,
            transform: showIndicator ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.4s ease",
          }}
        >
          {/* Section label with dot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            {/* Animated dot */}
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#5DE67A",
                boxShadow: "0 0 8px rgba(93,230,122,0.6)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {currentSection.label}
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "14px",
              background: "rgba(255,255,255,0.15)",
            }}
          />

          {/* Progress percentage */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6875rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.4)",
              minWidth: "32px",
              textAlign: "right",
            }}
          >
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* Bottom border with progress indicator */}
      <div
        style={{
          position: "fixed",
          top: "56px",
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 99,
          background: "rgba(255,255,255,0.05)",
          opacity: showIndicator ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {/* Progress fill */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${progress * 100}%`,
            background: "linear-gradient(90deg, #5DE67A, #00d4ff)",
            boxShadow: "0 0 10px rgba(93,230,122,0.5)",
            transition: "width 0.1s ease-out",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </>
  );
}
