import { cn } from "~/lib/utils";

interface HeroBrandProps {
  /** Whether the brand reveal is visible */
  isVisible: boolean;
}

export function HeroBrand({ isVisible }: HeroBrandProps) {
  return (
    <div
      className={cn(
        "absolute bottom-[12%] left-1/2 z-25",
        "transition-all duration-1000 ease-out-cubic",
        isVisible
          ? "opacity-100 -translate-x-1/2 translate-y-0"
          : "opacity-0 -translate-x-1/2 translate-y-10"
      )}
    >
      <span className="text-gradient-shimmer font-display text-label-sm font-semibold tracking-[0.5em] uppercase">
        Architects of Innovation
      </span>
    </div>
  );
}
