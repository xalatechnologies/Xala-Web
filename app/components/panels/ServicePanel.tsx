import type { ReactNode } from "react";

interface Pillar {
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  accentColor: string;
}

interface ServicePanelProps {
  isVisible: boolean;
  progress?: number;
}

// High-quality SVG Icons
const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 8v2" />
    <path d="M12 14v2" />
    <path d="M8 12h2" />
    <path d="M14 12h2" />
  </svg>
);

const SaaSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m8 17 4-5 4 5" />
  </svg>
);

const BlockchainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="6" height="6" rx="1" />
    <rect x="16" y="7" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <rect x="9" y="16" width="6" height="6" rx="1" />
    <path d="M5 13v2a2 2 0 0 0 2 2h3" />
    <path d="M19 13v2a2 2 0 0 1-2 2h-3" />
    <path d="M12 8v8" />
  </svg>
);

const pillars: Pillar[] = [
  {
    icon: <AIIcon />,
    title: "AI Automation",
    tagline: "Intelligent Systems That Work",
    description: "Practical automation of workflows, decisions, and processes",
    highlights: ["Efficiency", "Scale", "Intelligence"],
    accentColor: "#5DE67A",
  },
  {
    icon: <SaaSIcon />,
    title: "SaaS Solutions",
    tagline: "Platforms Built for Scale",
    description: "Design, development, and operation of scalable SaaS platforms",
    highlights: ["Real Users", "Real Data", "Real Business"],
    accentColor: "#00d4ff",
  },
  {
    icon: <BlockchainIcon />,
    title: "Blockchain & Web3",
    tagline: "Infrastructure for Tomorrow",
    description: "Decentralized and hybrid systems, enterprise-ready",
    highlights: ["Compliance", "Security", "Longevity"],
    accentColor: "#D4A853",
  },
];

// Shared panel dimensions
const PANEL_WIDTH = "340px";
const PANEL_EDGE = "2%";
const PANEL_TOP = "15%";
const PANEL_BOTTOM = "12%";

export function ServicePanel({ isVisible, progress = 0 }: ServicePanelProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: PANEL_TOP,
        bottom: PANEL_BOTTOM,
        left: PANEL_EDGE,
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
          Core Pillars
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, #5DE67A, transparent)",
          }}
        />
      </div>

      {/* Pillar Cards - Flex grow to fill space evenly */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {pillars.map((pillar, index) => {
          const threshold = 0.06 + index * 0.04;
          const cardVisible = isVisible && progress > threshold;

          return (
            <div
              key={pillar.title}
              style={{
                flex: 1,
                position: "relative",
                background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                padding: "1rem",
                opacity: cardVisible ? 1 : 0,
                transform: cardVisible ? "translateX(0)" : "translateX(-40px)",
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${pillar.accentColor}50`;
                el.style.background = `linear-gradient(135deg, ${pillar.accentColor}15, rgba(255,255,255,0.03))`;
                el.style.boxShadow = `0 15px 40px rgba(0,0,0,0.4), 0 0 30px ${pillar.accentColor}20`;
                el.style.transform = "translateX(6px)";
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
                  background: `linear-gradient(90deg, transparent, ${pillar.accentColor}, transparent)`,
                  opacity: 0.6,
                }}
              />

              {/* Header row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${pillar.accentColor}25, ${pillar.accentColor}08)`,
                    border: `1px solid ${pillar.accentColor}40`,
                    color: pillar.accentColor,
                    flexShrink: 0,
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    style={{
fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "0.15rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: pillar.accentColor,
                    letterSpacing: "0.02em",
                    }}
                  >
                    {pillar.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
fontFamily: "'Manrope', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.5,
                marginBottom: "0.5rem",
                flex: 1,
                }}
              >
                {pillar.description}
              </p>

              {/* Highlights */}
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                {pillar.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.2rem 0.5rem",
                      background: `${pillar.accentColor}12`,
                      border: `1px solid ${pillar.accentColor}25`,
                      borderRadius: "12px",
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      color: pillar.accentColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span
                      style={{
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: pillar.accentColor,
                        boxShadow: `0 0 4px ${pillar.accentColor}`,
                      }}
                    />
                    {highlight}
                  </span>
                ))}
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
          opacity: isVisible && progress > 0.15 ? 1 : 0,
          transform: isVisible && progress > 0.15 ? "translateY(0)" : "translateY(8px)",
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
          Together, a coherent system
        </span>
      </div>
    </div>
  );
}
