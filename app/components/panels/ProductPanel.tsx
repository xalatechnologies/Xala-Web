import { useState, useEffect, type ReactNode } from "react";

interface ValueContent {
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

const UptimeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const SystemsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const GlobalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AgentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ChainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

// Social media icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Phase content definitions for right panel
const phases: { headerLabel: string; footerLabel: string; values: ValueContent[] }[] = [
  // Phase 0: Why Xala (0-30%)
  {
    headerLabel: "Why Xala",
    footerLabel: "Proven track record",
    values: [
      {
        icon: <ExperienceIcon />,
        value: "20+",
        label: "Years Experience",
        description: "Building enterprise-grade systems",
        accentColor: "#5DE67A",
      },
      {
        icon: <TrustIcon />,
        value: "50+",
        label: "Trusted Clients",
        description: "Enterprise & public sector worldwide",
        accentColor: "#00d4ff",
      },
      {
        icon: <VisionIcon />,
        value: "Future",
        label: "Thinking Vision",
        description: "AI-first with long-term focus",
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 1: Delivery Stats (30-45%)
  {
    headerLabel: "Our Delivery",
    footerLabel: "Measurable results",
    values: [
      {
        icon: <SystemsIcon />,
        value: "100+",
        label: "Systems Delivered",
        description: "Platforms, APIs, integrations",
        accentColor: "#5DE67A",
      },
      {
        icon: <UptimeIcon />,
        value: "99.9%",
        label: "System Uptime",
        description: "Production reliability",
        accentColor: "#00d4ff",
      },
      {
        icon: <GlobalIcon />,
        value: "5",
        label: "Countries",
        description: "Clients across Nordic & EU",
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 2: Team Stats (45-60%)
  {
    headerLabel: "Team Power",
    footerLabel: "Human + AI synergy",
    values: [
      {
        icon: <ExperienceIcon />,
        value: "15+",
        label: "Core Team",
        description: "Senior engineers & specialists",
        accentColor: "#5DE67A",
      },
      {
        icon: <AgentIcon />,
        value: "40+",
        label: "AI Agents",
        description: "Autonomous development support",
        accentColor: "#00d4ff",
      },
      {
        icon: <TrustIcon />,
        value: "24/7",
        label: "Support",
        description: "Enterprise-grade SLAs",
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 3: NorChain Stats (60-75%)
  {
    headerLabel: "NorChain",
    footerLabel: "Enterprise blockchain",
    values: [
      {
        icon: <ChainIcon />,
        value: "Web3",
        label: "Infrastructure",
        description: "Hybrid blockchain platform",
        accentColor: "#5DE67A",
      },
      {
        icon: <TrustIcon />,
        value: "GDPR",
        label: "Compliant",
        description: "Nordic regulatory standards",
        accentColor: "#00d4ff",
      },
      {
        icon: <GlobalIcon />,
        value: "Multi",
        label: "Chain Ready",
        description: "Ethereum, Polygon, custom",
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 4: Technology (70-84%)
  {
    headerLabel: "Technology",
    footerLabel: "Modern & proven",
    values: [
      {
        icon: <AgentIcon />,
        value: "GPT-4",
        label: "AI Powered",
        description: "Latest LLM integration",
        accentColor: "#5DE67A",
      },
      {
        icon: <SystemsIcon />,
        value: "Cloud",
        label: "Native",
        description: "AWS, Azure, GCP ready",
        accentColor: "#00d4ff",
      },
      {
        icon: <TrustIcon />,
        value: "ISO",
        label: "27001 Ready",
        description: "Security certified",
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 5: Social & Connect (84-100%)
  {
    headerLabel: "Connect",
    footerLabel: "Follow our journey",
    values: [
      {
        icon: <LinkedInIcon />,
        value: "LinkedIn",
        label: "Professional Network",
        description: "Company updates & insights",
        accentColor: "#0A66C2",
      },
      {
        icon: <GitHubIcon />,
        value: "GitHub",
        label: "Open Source",
        description: "Our public repositories",
        accentColor: "#ffffff",
      },
      {
        icon: <TwitterIcon />,
        value: "X / Twitter",
        label: "Latest News",
        description: "Tech insights & announcements",
        accentColor: "#5DE67A",
      },
    ],
  },
];

// Get current phase based on progress - evenly distributed
function getCurrentPhase(progress: number): number {
  if (progress < 0.28) return 0;  // Why Xala
  if (progress < 0.42) return 1;  // Our Delivery
  if (progress < 0.56) return 2;  // Team Power
  if (progress < 0.70) return 3;  // NorChain
  if (progress < 0.84) return 4;  // Technology
  return 5;                        // Social Connect
}

// Shared panel dimensions - must match ServicePanel
const PANEL_WIDTH = "340px";
const PANEL_EDGE = "2%";
const PANEL_TOP = "15%";
const PANEL_BOTTOM = "12%";

export function ProductPanel({
  isVisible,
  progress = 0,
}: ProductPanelProps) {
  const currentPhase = getCurrentPhase(progress);
  const [displayPhase, setDisplayPhase] = useState(currentPhase);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smooth phase transition with slower timing
  useEffect(() => {
    if (currentPhase !== displayPhase) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayPhase(currentPhase);
        setIsTransitioning(false);
      }, 500); // Slower transition for smoothness
      return () => clearTimeout(timer);
    }
  }, [currentPhase, displayPhase]);

  const phaseData = phases[displayPhase];
  // Social/Connect phase (5) stays visible permanently once reached
  const isContactPhase = displayPhase === 5;
  const contentOpacity = isVisible && (!isTransitioning || isContactPhase) ? 1 : 0;
  const contentTransform = isVisible && (!isTransitioning || isContactPhase) ? "translateX(0)" : "translateX(15px)";

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
          {phaseData.headerLabel}
        </span>
      </div>

      {/* Cards Container - animates as one unit with smooth phase transitions */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          minHeight: 0,
          opacity: contentOpacity,
          transform: contentTransform,
          transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {phaseData.values.map((value, index) => (
          <div
            key={`${currentPhase}-${index}`}
            style={{
              flex: 1,
              position: "relative",
              background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "1rem",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = `${value.accentColor}4D`;
              el.style.background = `linear-gradient(135deg, ${value.accentColor}14, rgba(255,255,255,0.03))`;
              el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${value.accentColor}1A`;
              el.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))";
              el.style.boxShadow = "none";
              el.style.transform = "translateX(0)";
            }}
          >
            {/* Icon & Value Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `linear-gradient(135deg, ${value.accentColor}33, ${value.accentColor}1A)`,
                  border: `1px solid ${value.accentColor}4D`,
                  borderRadius: "8px",
                  color: value.accentColor,
                  flexShrink: 0,
                }}
              >
                {value.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: value.accentColor,
                    lineHeight: 1,
                  }}
                >
                  {value.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginTop: "0.15rem",
                  }}
                >
                  {value.label}
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.4,
                marginTop: "auto",
              }}
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Panel Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease 0.4s",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(270deg, rgba(255,255,255,0.15), transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          {phaseData.footerLabel}
        </span>
      </div>
    </div>
  );
}
