/**
 * Value Card Component
 * Used in the right panel to display metrics/values
 */
import type { CSSProperties, ReactNode } from "react";
import {
  getCardBaseStyles,
  getCardHoverStyles,
  getCardDefaultStyles,
  getIconContainerStyles,
  TYPOGRAPHY,
} from "~/lib/panel-utils";

interface ValueCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  accentColor: string;
  link?: string;
}

export function ValueCard({
  icon,
  value,
  label,
  description,
  accentColor,
  link,
}: ValueCardProps) {
  const baseStyles = getCardBaseStyles();
  const iconStyles = getIconContainerStyles(accentColor);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const hoverStyles = getCardHoverStyles(accentColor);
    Object.assign(el.style, hoverStyles);
    el.style.transform = "translateX(-4px)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const defaultStyles = getCardDefaultStyles();
    Object.assign(el.style, defaultStyles);
    el.style.transform = "translateX(0)";
  };

  const content = (
    <>
      {/* Icon & Value Row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <div style={iconStyles}>{icon}</div>
        <div>
          <div style={TYPOGRAPHY.valueNumber(accentColor)}>{value}</div>
          <div style={TYPOGRAPHY.valueLabel}>{label}</div>
        </div>
      </div>

      {/* Description */}
      <p style={TYPOGRAPHY.valueDescription}>{description}</p>
    </>
  );

  // Render as link if link prop is provided
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...(baseStyles as CSSProperties),
          textDecoration: "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      style={baseStyles as CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
}

