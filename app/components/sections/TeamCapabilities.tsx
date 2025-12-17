import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

// SVG Icons for capabilities
const BlockchainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="7" width="6" height="6" rx="1" />
    <rect x="16" y="7" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <rect x="9" y="16" width="6" height="6" rx="1" />
    <path d="M5 13v2a2 2 0 0 0 2 2h3" />
    <path d="M19 13v2a2 2 0 0 1-2 2h-3" />
    <path d="M12 8v8" />
  </svg>
);

const SaaSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m8 17 4-5 4 5" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="6.5" cy="13.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
    <path d="M13.5 9v5.5a4.5 4.5 0 0 0 4 4.5" />
    <path d="M6.5 11V8.5a4.5 4.5 0 0 1 7-3.7" />
  </svg>
);

const QAIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

const AgentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

interface Capability {
  icon: ReactNode;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: <BlockchainIcon />,
    title: "Blockchain & Web3 Engineering",
    description: "Smart contracts, protocols, and decentralized systems",
  },
  {
    icon: <SaaSIcon />,
    title: "SaaS & Platform Development",
    description: "Scalable multi-tenant applications built for growth",
  },
  {
    icon: <AIIcon />,
    title: "AI Automation & Intelligent Systems",
    description: "Practical automation that delivers measurable outcomes",
  },
  {
    icon: <SecurityIcon />,
    title: "Cybersecurity & Compliance",
    description: "Enterprise-grade security and regulatory readiness",
  },
  {
    icon: <DesignIcon />,
    title: "UX/UI Design",
    description: "Intuitive interfaces that users love to use",
  },
  {
    icon: <QAIcon />,
    title: "Quality Assurance & Testing",
    description: "Rigorous testing for production-grade reliability",
  },
  {
    icon: <ProductIcon />,
    title: "Product Management",
    description: "Strategic roadmaps aligned with business goals",
  },
  {
    icon: <AgentIcon />,
    title: "Autonomous AI Agents (40+)",
    description: "Accelerating delivery under human oversight",
  },
];

interface TeamCapabilitiesProps {
  isVisible: boolean;
}

export function TeamCapabilities({ isVisible }: TeamCapabilitiesProps) {
  return (
    <section
      id="team"
      className={cn("relative py-32 px-6 md:px-12 lg:px-24", "bg-bg")}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-20",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala mb-4 block">
            Our Team & Capabilities
          </span>
          <h2 className="font-display text-display-sm font-bold text-text mb-6">
            A Multidisciplinary Engineering Team
          </h2>
          <p className="text-body-lg text-text-muted leading-relaxed">
            Xala Technologies is a multidisciplinary team of Blockchain experts,
            Web3 engineers, software developers, designers, testers,
            cybersecurity specialists, product managers — supported by 40+
            autonomous AI agents.
          </p>
        </div>

        {/* Capability Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={cn(
                "group relative p-6",
                "bg-gradient-to-br from-white/[0.04] to-white/[0.01]",
                "border border-white/10 rounded-2xl",
                "transition-all duration-500 ease-out",
                "hover:border-xala/30 hover:bg-gradient-to-br hover:from-xala/[0.08] hover:to-white/[0.02]",
                "hover:shadow-[0_20px_60px_-15px_rgba(93,230,122,0.15)]",
                "hover:-translate-y-1",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 mb-4",
                  "flex items-center justify-center",
                  "bg-gradient-to-br from-xala/20 to-xala/5",
                  "border border-xala/30 rounded-xl",
                  "text-xala",
                  "transition-all duration-300",
                  "group-hover:shadow-[0_0_20px_rgba(93,230,122,0.3)]",
                  "group-hover:scale-110"
                )}
              >
                {capability.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-body-md font-semibold text-text mb-2">
                {capability.title}
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed">
                {capability.description}
              </p>

              {/* Hover accent line */}
              <div
                className={cn(
                  "absolute top-0 left-6 right-6 h-[2px]",
                  "bg-gradient-to-r from-transparent via-xala to-transparent",
                  "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300"
                )}
              />
            </div>
          ))}
        </div>

        {/* AI Agents Explanation */}
        <div
          className={cn(
            "mt-16 text-center",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "800ms" }}
        >
          <div
            className={cn(
              "inline-flex items-center gap-3 px-6 py-4",
              "bg-white/[0.03] border border-white/10 rounded-full",
              "backdrop-blur-[10px]"
            )}
          >
            <div className="flex -space-x-2">
              {/* AI Agent indicators */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-8 h-8 rounded-full",
                    "bg-gradient-to-br from-xala/30 to-accent-cyan/20",
                    "border-2 border-bg",
                    "flex items-center justify-center",
                    "text-xs font-bold text-xala"
                  )}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
              ))}
              <div
                className={cn(
                  "w-8 h-8 rounded-full",
                  "bg-white/10 border-2 border-bg",
                  "flex items-center justify-center",
                  "text-xs font-medium text-text-muted"
                )}
              >
                +35
              </div>
            </div>
            <div className="text-left pl-2">
              <p className="text-body-sm text-text-secondary">
                <span className="text-xala font-semibold">40+ AI Agents</span>{" "}
                accelerate development, testing & automation
              </p>
              <p className="text-label-sm text-text-dim">
                Always under human oversight
              </p>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div
          className={cn(
            "mt-16 pt-12 border-t border-white/10",
            "grid grid-cols-1 md:grid-cols-3 gap-8",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "900ms" }}
        >
          {[
            {
              title: "Collaborative Delivery",
              description:
                "Human expertise drives every decision. AI amplifies our capabilities.",
            },
            {
              title: "Enterprise Standards",
              description:
                "Security, compliance, and quality built into every project from day one.",
            },
            {
              title: "Continuous Innovation",
              description:
                "Constantly evolving our tools and methods to deliver better outcomes.",
            },
          ].map((value, index) => (
            <div
              key={value.title}
              className="text-center"
              style={{ transitionDelay: `${1000 + index * 100}ms` }}
            >
              <h4 className="font-display text-body-md font-semibold text-text mb-2">
                {value.title}
              </h4>
              <p className="text-body-sm text-text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
