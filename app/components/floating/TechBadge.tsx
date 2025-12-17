import { cn } from "~/lib/utils";

interface TechBadgeProps {
  /** Technology name */
  name: string;
  /** Badge variant */
  variant?: "default" | "cyan" | "purple" | "blue" | "gold";
  /** Whether the badge is visible */
  isVisible: boolean;
  /** Animation delay in ms */
  delay?: number;
  /** Float animation duration */
  floatDuration?: string;
  /** Float animation delay */
  floatDelay?: string;
  /** Custom className for positioning */
  className?: string;
}

const variantStyles = {
  default: {
    dotColor: "bg-xala shadow-[0_0_12px_var(--xala-green)]",
  },
  cyan: {
    dotColor: "bg-accent-cyan shadow-[0_0_12px_var(--accent-cyan)]",
  },
  purple: {
    dotColor: "bg-accent-purple shadow-[0_0_12px_var(--accent-purple)]",
  },
  blue: {
    dotColor: "bg-accent-blue shadow-[0_0_12px_var(--accent-blue)]",
  },
  gold: {
    dotColor: "bg-accent-gold shadow-[0_0_12px_var(--accent-gold)]",
  },
};

export function TechBadge({
  name,
  variant = "default",
  isVisible,
  delay = 0,
  floatDuration = "7s",
  floatDelay = "0s",
  className,
}: TechBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "absolute",
        "inline-flex items-center gap-2.5 px-4 py-2.5",
        "bg-bg/80 backdrop-blur-[10px]",
        "border border-border rounded-full",
        "transition-all duration-1000 ease-out-cubic",
        // Visibility
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        // Use separate animation properties instead of shorthand to avoid React warning
        animationName: isVisible ? "float" : "none",
        animationDuration: floatDuration,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDelay: floatDelay,
      }}
    >
      {/* Dot indicator */}
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          styles.dotColor
        )}
      />
      {/* Name */}
      <span className="text-label-md font-medium text-text-muted">
        {name}
      </span>
    </div>
  );
}
