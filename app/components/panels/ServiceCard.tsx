import { cn } from "~/lib/utils";

interface ServiceCardProps {
  /** Service icon (emoji or component) */
  icon: string;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Tags to display */
  tags: string[];
  /** Whether the card is visible */
  isVisible: boolean;
  /** Animation delay in ms */
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  tags,
  isVisible,
  delay = 0,
}: ServiceCardProps) {
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
        "after:absolute after:-top-px after:left-6 after:w-12 after:h-0.5",
        "after:bg-xala after:shadow-[0_0_15px_var(--xala-green-glow)]",
        "after:opacity-0 after:transition-opacity after:duration-300",
        "hover:after:opacity-100",
        // Hover state
        "hover:border-xala/30",
        "hover:bg-gradient-to-br hover:from-xala-glow-subtle hover:to-white/[0.03]",
        "hover:shadow-card-hover hover:-translate-y-1",
        // Visibility animation
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex gap-5 items-start">
        {/* Icon */}
        <div
          className={cn(
            "relative w-14 h-14 rounded-[14px] flex-shrink-0",
            "flex items-center justify-center",
            "bg-gradient-to-br from-xala/15 to-xala/5",
            "border border-xala/25",
            // Glow on hover
            "before:absolute before:-inset-1 before:rounded-[17px]",
            "before:bg-gradient-to-br before:from-xala before:to-transparent",
            "before:opacity-0 before:transition-opacity before:duration-300",
            "before:-z-10 before:blur-[10px]",
            "group-hover:before:opacity-60"
          )}
        >
          <span className="text-2xl">{icon}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-heading-md font-semibold text-text mb-2">
            {title}
          </h3>
          <p className="text-body-md text-text-muted leading-relaxed mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center px-3 py-1.5",
                  "bg-xala/10 border border-xala/20 rounded-md",
                  "text-tag font-semibold text-xala uppercase"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
