import { cn } from "~/lib/utils";

interface TechBadgeProps {
  /** Technology name */
  name: string;
  /** Icon (emoji or component) */
  icon: string;
  /** Badge variant */
  variant?: "default" | "copper" | "cyan" | "purple";
  /** Whether the badge is visible */
  isVisible: boolean;
  /** Animation delay in ms */
  delay?: number;
  /** Custom className for positioning */
  className?: string;
}

const variantStyles = {
  default: {
    bg: "from-xala/20 to-xala/5",
    border: "border-xala/30",
    text: "text-xala",
    glow: "shadow-[0_0_20px_rgba(93,230,122,0.3)]",
  },
  copper: {
    bg: "from-copper/20 to-copper/5",
    border: "border-copper/30",
    text: "text-copper",
    glow: "shadow-[0_0_20px_rgba(184,115,51,0.3)]",
  },
  cyan: {
    bg: "from-accent-cyan/20 to-accent-cyan/5",
    border: "border-accent-cyan/30",
    text: "text-accent-cyan",
    glow: "shadow-[0_0_20px_rgba(0,212,255,0.3)]",
  },
  purple: {
    bg: "from-accent-purple/20 to-accent-purple/5",
    border: "border-accent-purple/30",
    text: "text-accent-purple",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
};

export function TechBadge({
  name,
  icon,
  variant = "default",
  isVisible,
  delay = 0,
  className,
}: TechBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "absolute",
        "inline-flex items-center gap-2 px-4 py-2",
        "bg-gradient-to-r",
        styles.bg,
        "border",
        styles.border,
        "rounded-full",
        "backdrop-blur-sm",
        "transition-all duration-700 ease-out-cubic",
        // Hover effects
        "hover:scale-105",
        `hover:${styles.glow}`,
        // Float animation
        "animate-float",
        // Visibility
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay * 0.5}ms`,
      }}
    >
      <span className="text-lg">{icon}</span>
      <span className={cn("text-label-sm font-semibold", styles.text)}>
        {name}
      </span>
    </div>
  );
}
