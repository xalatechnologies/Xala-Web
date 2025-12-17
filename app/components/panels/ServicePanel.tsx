"use client";

import { cn } from "~/lib/utils";
import { ServiceCard } from "./ServiceCard";

interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface ServicePanelProps {
  /** Whether the panel is visible */
  isVisible: boolean;
  /** Services to display */
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: "🏗️",
    title: "Solution Architecture",
    description:
      "End-to-end technical blueprints that transform complex requirements into scalable, future-proof systems.",
    tags: ["Cloud Native", "Microservices", "Event-Driven"],
  },
  {
    icon: "⚡",
    title: "Full-Stack Development",
    description:
      "From concept to deployment, we build performant applications using cutting-edge technologies.",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Intelligent systems that learn, adapt, and automate complex business processes.",
    tags: ["ML/AI", "LLMs", "Process Mining"],
  },
];

export function ServicePanel({
  isVisible,
  services = defaultServices,
}: ServicePanelProps) {
  return (
    <div
      className={cn(
        "fixed left-8 top-1/2 -translate-y-1/2 z-20",
        "w-[380px] max-w-[calc(100vw-2rem)]",
        "flex flex-col gap-5",
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Section Header */}
      <div
        className={cn(
          "transition-all duration-700 ease-out-cubic",
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        )}
      >
        <h2 className="font-display text-heading-lg font-bold text-text mb-2">
          Our Services
        </h2>
        <p className="text-body-md text-text-muted">
          Enterprise-grade solutions built for scale
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tags={service.tags}
            isVisible={isVisible}
            delay={150 + index * 100}
          />
        ))}
      </div>
    </div>
  );
}
