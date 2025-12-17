"use client";

import { cn } from "~/lib/utils";

const features = [
  {
    title: "Enterprise-Grade Infrastructure",
    description:
      "Production-ready blockchain infrastructure designed for organizations that need reliability, security, and compliance.",
  },
  {
    title: "Hybrid Architecture",
    description:
      "Seamlessly connect traditional systems with decentralized networks. Bridge the gap between Web2 and Web3.",
  },
  {
    title: "AI-Powered Operations",
    description:
      "Automated monitoring, intelligent contract execution, and predictive analytics built into the platform.",
  },
  {
    title: "Norwegian Compliance",
    description:
      "Built with Nordic regulatory requirements in mind. GDPR-compliant, transparent, and audit-ready.",
  },
];

interface NorChainSectionProps {
  isVisible: boolean;
}

export function NorChainSection({ isVisible }: NorChainSectionProps) {
  return (
    <section
      id="norchain"
      className={cn(
        "relative py-32 px-6 md:px-12 lg:px-24",
        "bg-gradient-to-b from-bg to-bg-elevated",
        "overflow-hidden"
      )}
    >
      {/* Background accent */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[800px] h-[800px]",
          "bg-[radial-gradient(ellipse_at_center,rgba(93,230,122,0.05)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out-cubic",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala">
                Flagship Platform
              </span>
              <span className="px-2 py-0.5 bg-xala/20 border border-xala/30 rounded text-label-sm text-xala font-medium">
                Web3
              </span>
            </div>

            <h2 className="font-display text-display-sm font-bold text-text mb-4">
              NorChain
            </h2>
            <p className="text-heading-md text-text-secondary font-medium mb-6">
              Blockchain Infrastructure for the Real World
            </p>
            <p className="text-body-lg text-text-muted leading-relaxed mb-8">
              NorChain is our flagship blockchain and Web3 infrastructure platform.
              Built for enterprises and institutions that need decentralized technology
              without compromising on reliability, compliance, or integration with
              existing systems.
            </p>

            {/* CTA */}
            <a
              href="https://norchain.org"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-3 px-6 py-3",
                "bg-xala text-bg font-semibold rounded-lg",
                "transition-all duration-300",
                "hover:bg-xala-bright hover:shadow-[0_0_30px_rgba(93,230,122,0.4)]"
              )}
            >
              Explore NorChain
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          {/* Right: Features */}
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 gap-4",
              "transition-all duration-1000 ease-out-cubic",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "p-6",
                  "bg-white/[0.03] border border-white/10 rounded-xl",
                  "transition-all duration-500",
                  "hover:bg-white/[0.06] hover:border-xala/20",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <h3 className="text-body-md font-semibold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: What NorChain Provides */}
        <div
          className={cn(
            "mt-20 pt-12 border-t border-white/10",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Smart Contracts", value: "Secure" },
              { label: "Node Operations", value: "Managed" },
              { label: "Token Standards", value: "ERC-20/721" },
              { label: "Network", value: "Multi-Chain" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-heading-md font-display font-bold text-xala mb-1">
                  {item.value}
                </div>
                <div className="text-body-sm text-text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
