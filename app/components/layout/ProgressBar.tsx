interface ProgressBarProps {
  progress: number;
}

// Section definitions with their scroll ranges - evenly distributed
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
  const showLabel = progress > 0.02;

  return (
    <>
      {/* Progress bar */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          height: "2px",
          background: "linear-gradient(90deg, #5DE67A, #00d4ff, #5DE67A)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
          zIndex: 999,
          transformOrigin: "left",
          transform: `scaleX(${progress})`,
          width: "100%",
        }}
      />

      {/* Section label */}
      <div
        style={{
          position: "fixed",
          top: "90px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 998,
          opacity: showLabel ? 1 : 0,
          transition: "all 0.5s ease",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.5rem 1.25rem",
            background: "rgba(3, 3, 5, 0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "30px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {/* Animated dot */}
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#5DE67A",
              boxShadow: "0 0 10px rgba(93,230,122,0.5)",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {currentSection.label}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </>
  );
}
