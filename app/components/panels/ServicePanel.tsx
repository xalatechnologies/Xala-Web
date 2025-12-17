import { useState, useEffect, type ReactNode } from "react";

interface CardContent {
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

// SVG Icons
const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
    <circle cx="12" cy="12" r="2" />
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

const TeamIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CyberIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const NorChainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 8v2" />
    <path d="M12 14v2" />
    <path d="M8 12h2" />
    <path d="M14 12h2" />
  </svg>
);

const StackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

// Phase content definitions
const phases: { headerLabel: string; footerLabel: string; cards: CardContent[] }[] = [
  // Phase 0: Core Pillars (0-30%)
  {
    headerLabel: "Core Pillars",
    footerLabel: "Together, a coherent system",
    cards: [
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
    ],
  },
  // Phase 1: What We Deliver (30-45%)
  {
    headerLabel: "What We Deliver",
    footerLabel: "Real solutions, not promises",
    cards: [
      {
        icon: <CodeIcon />,
        title: "Enterprise Software",
        tagline: "Production-Grade Systems",
        description: "Scalable architectures, clean code, maintainable solutions",
        highlights: ["API Design", "Microservices", "Integration"],
        accentColor: "#5DE67A",
      },
      {
        icon: <SaaSIcon />,
        title: "Cloud Infrastructure",
        tagline: "Built for Scale",
        description: "AWS, Azure, Kubernetes - infrastructure that grows with you",
        highlights: ["DevOps", "CI/CD", "Monitoring"],
        accentColor: "#00d4ff",
      },
      {
        icon: <CyberIcon />,
        title: "Security & Compliance",
        tagline: "Enterprise Standards",
        description: "ISO 27001, GDPR, SOC 2 - security built in from day one",
        highlights: ["Audit Ready", "Zero Trust", "Encryption"],
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 2: Team (45-60%)
  {
    headerLabel: "Our Team",
    footerLabel: "Human expertise + AI power",
    cards: [
      {
        icon: <TeamIcon />,
        title: "Expert Engineers",
        tagline: "20+ Years Combined",
        description: "Senior developers, architects, and specialists",
        highlights: ["Full-Stack", "DevOps", "Security"],
        accentColor: "#5DE67A",
      },
      {
        icon: <BrainIcon />,
        title: "40+ AI Agents",
        tagline: "Accelerated Delivery",
        description: "Autonomous AI agents supporting development and testing",
        highlights: ["Code Review", "Testing", "Documentation"],
        accentColor: "#00d4ff",
      },
      {
        icon: <CyberIcon />,
        title: "Quality Focus",
        tagline: "99.9% Uptime",
        description: "Rigorous testing and monitoring across all deployments",
        highlights: ["TDD", "E2E Testing", "Performance"],
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 3: NorChain (60-75%)
  {
    headerLabel: "NorChain Platform",
    footerLabel: "Blockchain for the real world",
    cards: [
      {
        icon: <NorChainIcon />,
        title: "Enterprise Blockchain",
        tagline: "Production Ready",
        description: "Hybrid blockchain infrastructure for regulated industries",
        highlights: ["Private Chains", "Consensus", "Nodes"],
        accentColor: "#5DE67A",
      },
      {
        icon: <BlockchainIcon />,
        title: "Smart Contracts",
        tagline: "Secure & Audited",
        description: "Solidity, audited contracts, secure execution",
        highlights: ["ERC-20", "ERC-721", "Custom"],
        accentColor: "#00d4ff",
      },
      {
        icon: <CyberIcon />,
        title: "Nordic Compliance",
        tagline: "GDPR Ready",
        description: "Built for Norwegian and EU regulatory requirements",
        highlights: ["Audit Trail", "Privacy", "Transparency"],
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 4: AI & Tech (70-84%)
  {
    headerLabel: "AI & Technology",
    footerLabel: "Modern stack, proven results",
    cards: [
      {
        icon: <BrainIcon />,
        title: "AI Integration",
        tagline: "LLMs & Automation",
        description: "OpenAI, LangChain, custom models for real workflows",
        highlights: ["GPT-4", "RAG", "Fine-tuning"],
        accentColor: "#5DE67A",
      },
      {
        icon: <StackIcon />,
        title: "Modern Stack",
        tagline: "Best-in-Class Tools",
        description: "React, TypeScript, Node.js, Python, and more",
        highlights: ["Next.js", "Remix", "FastAPI"],
        accentColor: "#00d4ff",
      },
      {
        icon: <CodeIcon />,
        title: "Data & Analytics",
        tagline: "Insights That Matter",
        description: "PostgreSQL, MongoDB, real-time analytics",
        highlights: ["ETL", "Dashboards", "ML Ops"],
        accentColor: "#D4A853",
      },
    ],
  },
  // Phase 5: Contact (84-100%)
  {
    headerLabel: "Get in Touch",
    footerLabel: "Let's build together",
    cards: [
      {
        icon: <TeamIcon />,
        title: "Start a Conversation",
        tagline: "hello@xala.no",
        description: "Tell us about your project and let's explore how we can help",
        highlights: ["Free Consultation", "No Commitment"],
        accentColor: "#5DE67A",
      },
      {
        icon: <NorChainIcon />,
        title: "Oslo, Norway",
        tagline: "Nordic Headquarters",
        description: "Serving clients across Norway, Nordics, and Europe",
        highlights: ["Remote First", "On-Site Available"],
        accentColor: "#00d4ff",
      },
      {
        icon: <CyberIcon />,
        title: "Enterprise Ready",
        tagline: "SLA & Support",
        description: "Dedicated account management and 24/7 support options",
        highlights: ["NDA Ready", "Compliance"],
        accentColor: "#D4A853",
      },
    ],
  },
];

// Get current phase based on progress - evenly distributed
function getCurrentPhase(progress: number): number {
  if (progress < 0.28) return 0;  // Core Pillars
  if (progress < 0.42) return 1;  // What We Deliver
  if (progress < 0.56) return 2;  // Our Team
  if (progress < 0.70) return 3;  // NorChain
  if (progress < 0.84) return 4;  // AI & Tech
  return 5;                        // Contact
}

// Shared panel dimensions
const PANEL_WIDTH = "340px";
const PANEL_EDGE = "2%";
const PANEL_TOP = "15%";
const PANEL_BOTTOM = "12%";

export function ServicePanel({ isVisible, progress = 0 }: ServicePanelProps) {
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
  // Contact phase (5) stays visible permanently once reached
  const isContactPhase = displayPhase === 5;
  const contentOpacity = isVisible && (!isTransitioning || isContactPhase) ? 1 : 0;
  const contentTransform = isVisible && (!isTransitioning || isContactPhase) ? "translateX(0)" : "translateX(-15px)";

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
          {phaseData.headerLabel}
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, #5DE67A, transparent)",
          }}
        />
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
        {phaseData.cards.map((card, index) => (
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
              el.style.borderColor = `${card.accentColor}4D`;
              el.style.background = `linear-gradient(135deg, ${card.accentColor}14, rgba(255,255,255,0.03))`;
              el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${card.accentColor}1A`;
              el.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))";
              el.style.boxShadow = "none";
              el.style.transform = "translateX(0)";
            }}
          >
            {/* Icon & Title Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `linear-gradient(135deg, ${card.accentColor}33, ${card.accentColor}1A)`,
                  border: `1px solid ${card.accentColor}4D`,
                  borderRadius: "8px",
                  color: card.accentColor,
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "0.1rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: card.accentColor,
                    letterSpacing: "0.02em",
                  }}
                >
                  {card.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.4,
                marginBottom: "0.5rem",
                flex: 1,
              }}
            >
              {card.description}
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {card.highlights.map((highlight) => (
                <span
                  key={highlight}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    padding: "0.25rem 0.5rem",
                    background: `linear-gradient(135deg, ${card.accentColor}1A, transparent)`,
                    border: `1px solid ${card.accentColor}33`,
                    borderRadius: "6px",
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    color: card.accentColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {highlight}
                </span>
              ))}
            </div>
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
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)",
          }}
        />
      </div>
    </div>
  );
}
