import { cn } from "~/lib/utils";

type ProductStatus = "live" | "beta" | "coming-soon";

interface ProductCardProps {
  /** Product icon (emoji or component) */
  icon: string;
  /** Product name */
  name: string;
  /** Product description */
  description: string;
  /** Product status */
  status: ProductStatus;
  /** Whether the card is visible */
  isVisible: boolean;
  /** Animation delay in ms */
  delay?: number;
}

const statusConfig: Record<
  ProductStatus,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "bg-xala/15 border-xala/30 text-xala",
  },
  beta: {
    label: "Beta",
    className: "bg-accent-cyan/15 border-accent-cyan/30 text-accent-cyan",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-accent-purple/15 border-accent-purple/30 text-accent-purple",
  },
};

export function ProductCard({
  icon,
  name,
  description,
  status,
  isVisible,
  delay = 0,
}: ProductCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div
      className={cn(
        "relative",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        "border border-white/10 rounded-2xl p-6",
        "backdrop-blur-[10px]",
        "transition-all duration-700 ease-out-cubic",
        "overflow-hidden",
        // Animated border on hover
        "before:absolute before:inset-0 before:rounded-2xl before:p-px",
        "before:bg-gradient-to-br before:from-xala before:via-transparent before:to-accent-cyan",
        "before:bg-[length:200%_200%]",
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[mask-composite:exclude]",
        "before:opacity-0 before:animate-border-flow before:[animation-play-state:paused]",
        "before:transition-opacity before:duration-300",
        "hover:before:opacity-100 hover:before:[animation-play-state:running]",
        // Corner accent
        "after:absolute after:-top-px after:right-6 after:w-12 after:h-0.5",
        "after:bg-accent-cyan after:shadow-[0_0_15px_rgba(0,212,255,0.5)]",
        "after:opacity-0 after:transition-opacity after:duration-300",
        "hover:after:opacity-100",
        // Hover state
        "hover:border-accent-cyan/30",
        "hover:bg-gradient-to-br hover:from-accent-cyan/5 hover:to-white/[0.03]",
        "hover:shadow-card-hover hover:-translate-y-1",
        // Visibility animation
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex gap-4 items-start">
        {/* Icon */}
        <div
          className={cn(
            "relative w-12 h-12 rounded-xl flex-shrink-0",
            "flex items-center justify-center",
            "bg-gradient-to-br from-accent-cyan/15 to-accent-cyan/5",
            "border border-accent-cyan/25"
          )}
        >
          <span className="text-xl">{icon}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display text-heading-sm font-semibold text-text">
              {name}
            </h3>
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-1",
                "text-tag font-semibold uppercase",
                "border rounded-md",
                statusInfo.className
              )}
            >
              {statusInfo.label}
            </span>
          </div>
          <p className="text-body-sm text-text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
