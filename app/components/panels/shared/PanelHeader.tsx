/**
 * Panel Header Component
 * Shows the phase label with an animated gradient line
 */
import type { CSSProperties } from "react";
import {
  getHeaderFooterStyles,
  getGradientLineStyles,
  TYPOGRAPHY,
} from "~/lib/panel-utils";

interface PanelHeaderProps {
  label: string;
  isVisible: boolean;
  direction: "left" | "right";
}

export function PanelHeader({ label, isVisible, direction }: PanelHeaderProps) {
  const containerStyles: CSSProperties = getHeaderFooterStyles(isVisible);
  const lineStyles = getGradientLineStyles(direction);

  return (
    <div style={containerStyles}>
      {direction === "right" && <div style={lineStyles} />}
      <span style={TYPOGRAPHY.headerLabel}>{label}</span>
      {direction === "left" && <div style={lineStyles} />}
    </div>
  );
}

