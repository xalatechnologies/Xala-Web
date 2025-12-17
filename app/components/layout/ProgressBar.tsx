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
        {/* Background - always visible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(3, 3, 5, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(93, 230, 122, 0.1)",
            zIndex: 0,
          }}
        />

        {/* Logo - left side, always visible */}
        <a
          href="/"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            pointerEvents: "auto",
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

        {/* Section indicator - right side, always visible */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
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


      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </>
  );
}
