/**
 * Panel Footer Component
 * Shows the phase tagline with a subtle gradient line
 */
import type { CSSProperties } from "react";
import {
  getHeaderFooterStyles,
  getFooterLineStyles,
  TYPOGRAPHY,
} from "~/lib/panel-utils";

interface PanelFooterProps {
  label: string;
  isVisible: boolean;
  direction: "left" | "right";
}

export function PanelFooter({ label, isVisible, direction }: PanelFooterProps) {
  const containerStyles: CSSProperties = {
    ...getHeaderFooterStyles(isVisible, "0.4s"),
  };
  const lineStyles = getFooterLineStyles(direction);

  return (
    <div style={containerStyles}>
      {direction === "right" && <div style={lineStyles} />}
      <span style={TYPOGRAPHY.footerLabel}>{label}</span>
      {direction === "left" && <div style={lineStyles} />}
    </div>
  );
}

