
import { cn } from "~/lib/utils";

interface TechCategory {
  name: string;
  technologies: string[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Java", ".NET", "Python"],
  },
  {
    name: "Cloud & Infrastructure",
    technologies: ["AWS", "Azure", "Kubernetes", "Terraform"],
  },
  {
    name: "Data & AI",
    technologies: ["PostgreSQL", "MongoDB", "OpenAI", "LangChain"],
  },
  {
    name: "Blockchain",
    technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
  },
  {
    name: "DevOps",
    technologies: ["Docker", "GitHub Actions", "Datadog", "Vault"],
  },
];

interface TechStackProps {
  isVisible: boolean;
}

export function TechStack({ isVisible }: TechStackProps) {
  return (
    <section
      id="tech-stack"
      className={cn(
        "relative py-24 px-6 md:px-12 lg:px-24",
        "bg-bg",
        "border-t border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-text-dim mb-3 block">
            Technology Foundation
          </span>
          <h2 className="font-display text-heading-lg font-bold text-text">
            Built With Modern Tools
          </h2>
        </div>

        {/* Tech Categories */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {techCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className={cn(
                "transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${300 + catIndex * 75}ms` }}
            >
              <div className="text-label-sm font-semibold text-text-dim uppercase tracking-wider mb-3">
                {category.name}
              </div>
              <div className="space-y-2">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className={cn(
                      "px-3 py-2",
                      "bg-white/[0.03] border border-white/10 rounded-lg",
                      "text-body-sm text-text-muted",
                      "transition-colors duration-300",
                      "hover:bg-white/[0.06] hover:text-text hover:border-white/20"
                    )}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={cn(
            "mt-12 text-center",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-body-sm text-text-dim">
            Technology is a means, not an end. We choose tools that fit the problem—not the other way around.
          </p>
        </div>
      </div>
    </section>
  );
}
