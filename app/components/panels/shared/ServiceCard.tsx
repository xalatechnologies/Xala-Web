/**
 * Service Card Component
 * Used in the left panel to display services/features
 */
import type { CSSProperties, ReactNode } from "react";
import {
  getCardBaseStyles,
  getCardHoverStyles,
  getCardDefaultStyles,
  getIconContainerStyles,
  getHighlightStyles,
  TYPOGRAPHY,
} from "~/lib/panel-utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  accentColor: string;
}

export function ServiceCard({
  icon,
  title,
  tagline,
  description,
  highlights,
  accentColor,
}: ServiceCardProps) {
  const baseStyles = getCardBaseStyles();
  const iconStyles = getIconContainerStyles(accentColor);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const hoverStyles = getCardHoverStyles(accentColor);
    Object.assign(el.style, hoverStyles);
    el.style.transform = "translateX(4px)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const defaultStyles = getCardDefaultStyles();
    Object.assign(el.style, defaultStyles);
    el.style.transform = "translateX(0)";
  };

  return (
    <div
      style={baseStyles as CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon & Title Row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <div style={iconStyles}>{icon}</div>
        <div>
          <h3 style={TYPOGRAPHY.cardTitle}>{title}</h3>
          <p style={TYPOGRAPHY.cardTagline(accentColor)}>{tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p style={TYPOGRAPHY.cardDescription}>{description}</p>

      {/* Highlights */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {highlights.map((highlight) => (
          <span key={highlight} style={getHighlightStyles(accentColor) as CSSProperties}>
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}

