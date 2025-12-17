import type { ReactNode } from "react";

interface CoreValue {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  accentColor: string;
}

interface ProductPanelProps {
  isVisible: boolean;
  progress?: number;
}

// SVG Icons
const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TrustIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const coreValues: CoreValue[] = [
  {
    icon: <ExperienceIcon />,
    value: "20+",
    label: "Years Experience",
    description: "Building enterprise-grade systems across industries",
    accentColor: "#5DE67A",
  },
  {
    icon: <TrustIcon />,
    value: "50+",
    label: "Trusted Clients",
    description: "Enterprise & public sector organizations worldwide",
    accentColor: "#00d4ff",
  },
  {
    icon: <VisionIcon />,
    value: "Future",
    label: "Thinking Vision",
    description: "AI-first approach with long-term infrastructure focus",
    accentColor: "#D4A853",
  },
];

// Shared panel dimensions - must match ServicePanel
const PANEL_WIDTH = "340px";
const PANEL_EDGE = "2%";
const PANEL_TOP = "15%";
const PANEL_BOTTOM = "12%";

export function ProductPanel({
  isVisible,
  progress = 0,
}: ProductPanelProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: PANEL_TOP,
        bottom: PANEL_BOTTOM,
        right: PANEL_EDGE,
        width: PANEL_WIDTH,
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {/* Panel Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(15px)",
          transition: "all 0.6s ease",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(270deg, #5DE67A, transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5DE67A",
            whiteSpace: "nowrap",
          }}
        >
          Why Xala
        </span>
      </div>

      {/* Core Value Cards - Flex grow to fill space evenly */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {coreValues.map((value, index) => {
          const threshold = 0.08 + index * 0.05;
          const cardVisible = isVisible && progress > threshold;

          return (
            <div
              key={value.label}
              style={{
                flex: 1,
                position: "relative",
                background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                padding: "1rem",
                opacity: cardVisible ? 1 : 0,
                transform: cardVisible ? "translateX(0)" : "translateX(40px)",
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${value.accentColor}50`;
                el.style.background = `linear-gradient(135deg, ${value.accentColor}15, rgba(255,255,255,0.03))`;
                el.style.boxShadow = `0 15px 40px rgba(0,0,0,0.4), 0 0 30px ${value.accentColor}20`;
                el.style.transform = "translateX(-6px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.12)";
                el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))";
                el.style.boxShadow = "none";
                el.style.transform = "translateX(0)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "0.75rem",
                  right: "0.75rem",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${value.accentColor}, transparent)`,
                  opacity: 0.6,
                }}
              />

              {/* Content */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* Icon */}
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${value.accentColor}25, ${value.accentColor}08)`,
                    border: `1px solid ${value.accentColor}40`,
                    color: value.accentColor,
                    flexShrink: 0,
                  }}
                >
                  {value.icon}
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  {/* Value */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: value.accentColor,
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {value.value}
                  </div>
                  
                  {/* Label */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {value.label}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom tagline */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: isVisible && progress > 0.2 ? 1 : 0,
          transform: isVisible && progress > 0.2 ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.6s ease 0.4s",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Proven track record
        </span>
      </div>
    </div>
  );
}
