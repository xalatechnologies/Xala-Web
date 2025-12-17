
import { cn } from "~/lib/utils";

const automationAreas = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" />
        <path d="M9 9h6v6H9z" />
        <path d="M4 9h5M15 9h5M4 15h5M15 15h5M9 4v5M9 15v5M15 4v5M15 15v5" />
      </svg>
    ),
    title: "Intelligent Workflows",
    description:
      "AI that understands your processes and automates decision points. Not just triggers and actions—actual intelligence in the loop.",
    applications: ["Document Processing", "Approval Routing", "Exception Handling"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Decision Support",
    description:
      "Systems that surface insights, predict outcomes, and recommend actions. Augmenting human judgment with data-driven intelligence.",
    applications: ["Risk Assessment", "Resource Allocation", "Prioritization"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Process Automation",
    description:
      "End-to-end automation of repetitive operations. From data entry to complex multi-system orchestration.",
    applications: ["Data Synchronization", "Report Generation", "Compliance Checks"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h10M7 12h10M7 17h6" />
      </svg>
    ),
    title: "Platform Intelligence",
    description:
      "AI capabilities embedded directly into SaaS platforms and infrastructure. Making every system smarter by default.",
    applications: ["Anomaly Detection", "Usage Optimization", "Predictive Maintenance"],
  },
];

const integrationPoints = [
  "SaaS Platforms",
  "Blockchain Infrastructure",
  "Enterprise Systems",
  "Client Solutions",
];

interface AIAutomationProps {
  isVisible: boolean;
}

export function AIAutomation({ isVisible }: AIAutomationProps) {
  return (
    <section
      id="ai-automation"
      className={cn(
        "relative py-32 px-6 md:px-12 lg:px-24",
        "bg-gradient-to-b from-bg-elevated via-bg to-bg"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={cn(
            "max-w-3xl mb-16",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala mb-4 block">
            Cross-Cutting Capability
          </span>
          <h2 className="font-display text-display-sm font-bold text-text mb-6">
            AI Automation That Actually Works
          </h2>
          <p className="text-body-lg text-text-muted leading-relaxed">
            We don't sell AI as a buzzword. We embed practical automation into everything we build—
            from SaaS platforms to blockchain infrastructure to custom client solutions.
            AI that delivers measurable outcomes, not promises.
          </p>
        </div>

        {/* Automation Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {automationAreas.map((area, index) => (
            <div
              key={area.title}
              className={cn(
                "group p-8",
                "bg-gradient-to-br from-white/[0.04] to-transparent",
                "border border-white/10 rounded-2xl",
                "transition-all duration-700 ease-out-cubic",
                "hover:border-xala/20 hover:bg-white/[0.05]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl mb-5",
                  "flex items-center justify-center",
                  "bg-xala/10 border border-xala/20",
                  "text-xala",
                  "transition-all duration-300",
                  "group-hover:bg-xala/20 group-hover:scale-110"
                )}
              >
                {area.icon}
              </div>

              <h3 className="font-display text-heading-md font-bold text-text mb-3">
                {area.title}
              </h3>
              <p className="text-body-md text-text-muted leading-relaxed mb-5">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {area.applications.map((app) => (
                  <span
                    key={app}
                    className={cn(
                      "px-3 py-1",
                      "bg-xala/10 border border-xala/20 rounded-md",
                      "text-label-sm text-xala"
                    )}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Banner */}
        <div
          className={cn(
            "p-8 rounded-2xl",
            "bg-gradient-to-r from-xala/10 via-xala/5 to-transparent",
            "border border-xala/20",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-heading-md font-bold text-text mb-2">
                AI Embedded Everywhere
              </h3>
              <p className="text-body-md text-text-muted">
                Our AI capabilities are integrated across all our platforms and client solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {integrationPoints.map((point) => (
                <span
                  key={point}
                  className={cn(
                    "px-4 py-2",
                    "bg-bg border border-white/20 rounded-lg",
                    "text-body-sm font-medium text-text"
                  )}
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
