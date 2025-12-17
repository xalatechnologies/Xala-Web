
import { cn } from "~/lib/utils";

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
}

const pillars: Pillar[] = [
  {
    id: "ai-automation",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI Automation",
    subtitle: "Intelligent Systems That Work",
    description:
      "Practical automation of workflows, systems, decisions, and processes. We build AI that delivers measurable outcomes—not promises.",
    outcomes: ["Process Efficiency", "Decision Intelligence", "Scalable Operations", "Cost Reduction"],
  },
  {
    id: "saas-solutions",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M15 9h6M3 15h6M15 15h6" />
      </svg>
    ),
    title: "SaaS Solutions",
    subtitle: "Platforms Built for Scale",
    description:
      "Design, development, and operation of scalable SaaS platforms. Built for real users, real data, and real businesses.",
    outcomes: ["Multi-Tenant Architecture", "Enterprise Security", "Continuous Delivery", "Global Scale"],
  },
  {
    id: "blockchain-web3",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6l3-6z" />
      </svg>
    ),
    title: "Blockchain & Web3",
    subtitle: "Infrastructure for Tomorrow",
    description:
      "Infrastructure, platforms, and protocols for decentralized and hybrid systems. Enterprise-ready, compliance-aware, built for longevity.",
    outcomes: ["Decentralized Systems", "Smart Contracts", "Protocol Development", "Hybrid Architecture"],
  },
];

interface WhatWeDeliverProps {
  isVisible: boolean;
}

export function WhatWeDeliver({ isVisible }: WhatWeDeliverProps) {
  return (
    <section
      id="what-we-deliver"
      className={cn(
        "relative py-32 px-6 md:px-12 lg:px-24",
        "bg-gradient-to-b from-bg via-bg-elevated to-bg"
      )}
    >
      {/* Section Header */}
      <div
        className={cn(
          "max-w-4xl mx-auto text-center mb-20",
          "transition-all duration-1000 ease-out-cubic",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala mb-4 block">
          Our Core Capabilities
        </span>
        <h2 className="font-display text-display-sm font-bold text-text mb-6">
          What We Actually Deliver
        </h2>
        <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
          Three pillars that define everything we build. Each capability reinforces the others,
          creating integrated solutions that solve real problems.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={cn(
                "relative group",
                "bg-gradient-to-br from-white/[0.04] to-white/[0.01]",
                "border border-white/10 rounded-2xl",
                "p-8 lg:p-10",
                "transition-all duration-700 ease-out-cubic",
                "hover:border-xala/30 hover:bg-white/[0.06]",
                "hover:shadow-[0_20px_60px_-15px_rgba(93,230,122,0.15)]",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-16 h-16 rounded-xl mb-6",
                  "flex items-center justify-center",
                  "bg-gradient-to-br from-xala/20 to-xala/5",
                  "border border-xala/30",
                  "text-xala",
                  "transition-all duration-300",
                  "group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(93,230,122,0.3)]"
                )}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-heading-lg font-bold text-text mb-2">
                {pillar.title}
              </h3>
              <p className="text-body-md font-medium text-xala/80 mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-body-md text-text-muted leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Outcomes */}
              <div className="flex flex-wrap gap-2">
                {pillar.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className={cn(
                      "inline-flex items-center px-3 py-1.5",
                      "bg-white/5 border border-white/10 rounded-md",
                      "text-label-sm text-text-muted",
                      "transition-colors duration-300",
                      "group-hover:border-xala/20 group-hover:text-text"
                    )}
                  >
                    {outcome}
                  </span>
                ))}
              </div>

              {/* Corner accent on hover */}
              <div
                className={cn(
                  "absolute top-0 left-8 w-16 h-0.5",
                  "bg-gradient-to-r from-xala to-transparent",
                  "opacity-0 transition-opacity duration-300",
                  "group-hover:opacity-100"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
