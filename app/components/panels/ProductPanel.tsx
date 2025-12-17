"use client";

import { cn } from "~/lib/utils";
import { ProductCard } from "./ProductCard";
import { CertificationRow } from "./CertificationRow";

type ProductStatus = "live" | "beta" | "coming-soon";

interface Product {
  icon: string;
  name: string;
  description: string;
  status: ProductStatus;
}

interface ProductPanelProps {
  /** Whether the panel is visible */
  isVisible: boolean;
  /** Products to display */
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    icon: "📊",
    name: "Xala PM",
    description:
      "AI-powered project management that predicts bottlenecks and optimizes resource allocation.",
    status: "live",
  },
  {
    icon: "🔐",
    name: "Xala Auth",
    description:
      "Zero-trust authentication with biometric support and adaptive security policies.",
    status: "beta",
  },
  {
    icon: "📈",
    name: "Xala Analytics",
    description:
      "Real-time business intelligence with predictive insights and custom dashboards.",
    status: "coming-soon",
  },
];

export function ProductPanel({
  isVisible,
  products = defaultProducts,
}: ProductPanelProps) {
  return (
    <div
      className={cn(
        "fixed right-8 top-1/2 -translate-y-1/2 z-20",
        "w-[380px] max-w-[calc(100vw-2rem)]",
        "flex flex-col gap-5",
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Section Header */}
      <div
        className={cn(
          "transition-all duration-700 ease-out-cubic text-right",
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
        )}
      >
        <h2 className="font-display text-heading-lg font-bold text-text mb-2">
          Our Products
        </h2>
        <p className="text-body-md text-text-muted">
          SaaS solutions for modern enterprises
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex flex-col gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.name}
            icon={product.icon}
            name={product.name}
            description={product.description}
            status={product.status}
            isVisible={isVisible}
            delay={150 + index * 100}
          />
        ))}
      </div>

      {/* Certifications */}
      <CertificationRow isVisible={isVisible} delay={450} />
    </div>
  );
}
