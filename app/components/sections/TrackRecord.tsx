"use client";

import { cn } from "~/lib/utils";

interface Stat {
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years Experience",
    description: "Building enterprise-grade systems",
  },
  {
    value: "50+",
    label: "Systems Delivered",
    description: "Platforms, infrastructure, integrations",
  },
  {
    value: "25+",
    label: "Enterprise Clients",
    description: "Including regulated industries",
  },
  {
    value: "99.9%",
    label: "System Uptime",
    description: "Across production deployments",
  },
];

const capabilities = [
  "Enterprise Software Development",
  "Cloud Infrastructure & DevOps",
  "System Integration & APIs",
  "Security & Compliance",
  "Data Architecture",
  "Performance Optimization",
];

interface TrackRecordProps {
  isVisible: boolean;
}

export function TrackRecord({ isVisible }: TrackRecordProps) {
  return (
    <section
      id="track-record"
      className={cn(
        "relative py-32 px-6 md:px-12 lg:px-24",
        "bg-bg"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out-cubic",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala mb-4 block">
              Proven Delivery
            </span>
            <h2 className="font-display text-display-sm font-bold text-text mb-6">
              A Track Record Built on Results
            </h2>
            <p className="text-body-lg text-text-muted leading-relaxed mb-8">
              We've spent over a decade building systems that matter. From enterprise
              platforms to critical infrastructure, our work runs in production
              environments where failure isn't an option.
            </p>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className={cn(
                    "flex items-center gap-3 py-2",
                    "transition-all duration-500",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-xala" />
                  <span className="text-body-sm text-text-secondary">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div
            className={cn(
              "grid grid-cols-2 gap-6",
              "transition-all duration-1000 ease-out-cubic",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "relative p-6",
                  "bg-gradient-to-br from-white/[0.04] to-transparent",
                  "border border-white/10 rounded-xl",
                  "transition-all duration-500",
                  "hover:border-xala/20",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="font-display text-display-sm font-bold text-xala mb-1">
                  {stat.value}
                </div>
                <div className="text-body-md font-semibold text-text mb-1">
                  {stat.label}
                </div>
                <div className="text-body-sm text-text-muted">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className={cn(
            "mt-20 pt-12 border-t border-white/10",
            "flex flex-wrap justify-center gap-8",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          {["ISO 27001 Compliant", "GDPR Ready", "SOC 2 Type II", "Enterprise SLAs"].map(
            (badge) => (
              <div
                key={badge}
                className={cn(
                  "flex items-center gap-2 px-4 py-2",
                  "bg-white/5 border border-white/10 rounded-lg",
                  "text-label-sm text-text-muted"
                )}
              >
                <svg
                  className="w-4 h-4 text-xala"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
