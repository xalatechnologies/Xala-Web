"use client";

import { cn } from "~/lib/utils";

type ProductStatus = "live" | "beta" | "development";

interface Product {
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  targetUsers: string;
  capabilities: string[];
}

const products: Product[] = [
  {
    name: "Xala PM",
    tagline: "Project Intelligence Platform",
    description:
      "AI-powered project management that predicts bottlenecks, optimizes resource allocation, and automates routine coordination tasks.",
    status: "live",
    targetUsers: "Enterprise teams, agencies, product organizations",
    capabilities: ["Predictive Analytics", "Resource Optimization", "Automated Reporting", "Integration Hub"],
  },
  {
    name: "Xala Auth",
    tagline: "Enterprise Identity Platform",
    description:
      "Zero-trust authentication with biometric support, adaptive security policies, and seamless SSO integration for enterprise environments.",
    status: "beta",
    targetUsers: "Security teams, enterprise IT, regulated industries",
    capabilities: ["Biometric Auth", "Adaptive MFA", "SSO Federation", "Audit Logging"],
  },
  {
    name: "Xala Flow",
    tagline: "Workflow Automation Engine",
    description:
      "Visual workflow builder with AI-assisted automation. Connect systems, automate processes, and eliminate manual handoffs.",
    status: "development",
    targetUsers: "Operations teams, process owners, integrators",
    capabilities: ["Visual Builder", "AI Suggestions", "100+ Connectors", "Version Control"],
  },
];

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-xala/15 border-xala/30 text-xala",
  },
  beta: {
    label: "Beta",
    className: "bg-accent-cyan/15 border-accent-cyan/30 text-accent-cyan",
  },
  development: {
    label: "In Development",
    className: "bg-accent-purple/15 border-accent-purple/30 text-accent-purple",
  },
};

interface SaaSProductsProps {
  isVisible: boolean;
}

export function SaaSProducts({ isVisible }: SaaSProductsProps) {
  return (
    <section
      id="saas-products"
      className={cn(
        "relative py-32 px-6 md:px-12 lg:px-24",
        "bg-bg"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala mb-4 block">
            Our Products
          </span>
          <h2 className="font-display text-display-sm font-bold text-text mb-6">
            SaaS Platforms Built to Last
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            Real products solving concrete problems. Each platform is designed for scale,
            built with enterprise requirements, and continuously evolving.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          {products.map((product, index) => {
            const status = statusConfig[product.status];
            return (
              <div
                key={product.name}
                className={cn(
                  "relative group",
                  "bg-gradient-to-br from-white/[0.04] to-white/[0.01]",
                  "border border-white/10 rounded-2xl",
                  "p-8 lg:p-10",
                  "transition-all duration-700 ease-out-cubic",
                  "hover:border-xala/20 hover:bg-white/[0.05]",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Product Info */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-display text-heading-lg font-bold text-text">
                        {product.name}
                      </h3>
                      <span
                        className={cn(
                          "px-2.5 py-1 rounded-md border",
                          "text-label-sm font-semibold",
                          status.className
                        )}
                      >
                        {status.label}
                      </span>
                    </div>
                    <p className="text-body-md font-medium text-xala/80 mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-body-md text-text-muted leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Target Users */}
                  <div className="lg:col-span-3">
                    <div className="text-label-sm font-semibold text-text-dim uppercase tracking-wider mb-2">
                      Built For
                    </div>
                    <p className="text-body-sm text-text-secondary">
                      {product.targetUsers}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="lg:col-span-4">
                    <div className="text-label-sm font-semibold text-text-dim uppercase tracking-wider mb-3">
                      Key Capabilities
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className={cn(
                            "px-3 py-1.5",
                            "bg-white/5 border border-white/10 rounded-md",
                            "text-label-sm text-text-muted",
                            "transition-colors duration-300",
                            "group-hover:border-xala/20"
                          )}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
