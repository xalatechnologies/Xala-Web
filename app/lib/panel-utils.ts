/**
 * Utility functions and constants for panel components
 */
import type { CSSProperties } from "react";
import { PHASE_THRESHOLDS } from "~/data/panels";

// Panel layout constants
export const PANEL_CONFIG = {
  width: "340px",
  edge: "1.5rem", // Comfortable margin from edges
  top: "9%",
  bottom: "14%",
  gap: "0.75rem",
  cardBorderRadius: "14px",
  cardPadding: "0.875rem",
  zIndex: 30,
} as const;

// Transition timing constants
export const TRANSITION_CONFIG = {
  phaseDuration: 500,
  contentDuration: "0.8s",
  headerDuration: "0.6s",
  cardHoverDuration: "0.3s",
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  headerEasing: "ease",
} as const;

// Get current phase index based on scroll progress
export function getCurrentPhase(progress: number): number {
  for (let i = 0; i < PHASE_THRESHOLDS.length; i++) {
    if (progress < PHASE_THRESHOLDS[i]) return i;
  }
  return PHASE_THRESHOLDS.length; // Last phase (Contact)
}

// Check if current phase is the final "contact" phase
export function isContactPhase(phase: number): boolean {
  return phase === PHASE_THRESHOLDS.length;
}

// Generate glassmorphism card styles
export function getCardBaseStyles(): CSSProperties {
  return {
    flex: "1 1 0",
    maxHeight: "180px", // Limit card height
    position: "relative",
    background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: PANEL_CONFIG.cardBorderRadius,
    padding: PANEL_CONFIG.cardPadding,
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    transition: `all ${TRANSITION_CONFIG.cardHoverDuration} ${TRANSITION_CONFIG.headerEasing}`,
  };
}

// Generate card hover styles
export function getCardHoverStyles(accentColor: string): CSSProperties {
  return {
    borderColor: `${accentColor}4D`,
    background: `linear-gradient(135deg, ${accentColor}14, rgba(255,255,255,0.03))`,
    boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${accentColor}1A`,
  };
}

// Generate card default styles
export function getCardDefaultStyles(): CSSProperties {
  return {
    borderColor: "rgba(255,255,255,0.1)",
    background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    boxShadow: "none",
  };
}

// Generate icon container styles
export function getIconContainerStyles(accentColor: string): CSSProperties {
  return {
    width: "2.25rem",
    height: "2.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}1A)`,
    border: `1px solid ${accentColor}4D`,
    borderRadius: "8px",
    color: accentColor,
    flexShrink: 0,
  };
}

// Generate highlight tag styles
export function getHighlightStyles(accentColor: string): CSSProperties {
  return {
    fontFamily: "'Manrope', sans-serif",
    padding: "0.25rem 0.5rem",
    background: `linear-gradient(135deg, ${accentColor}1A, transparent)`,
    border: `1px solid ${accentColor}33`,
    borderRadius: "6px",
    fontSize: "0.625rem",
    fontWeight: 600,
    color: accentColor,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  };
}

// Panel container styles
export function getPanelContainerStyles(
  side: "left" | "right"
): CSSProperties {
  return {
    position: "absolute",
    top: PANEL_CONFIG.top,
    bottom: PANEL_CONFIG.bottom,
    [side]: PANEL_CONFIG.edge,
    width: PANEL_CONFIG.width,
    zIndex: PANEL_CONFIG.zIndex,
    display: "flex",
    flexDirection: "column",
    gap: PANEL_CONFIG.gap,
  };
}

// Content container transition styles
export function getContentTransitionStyles(
  isVisible: boolean,
  isTransitioning: boolean,
  isFinalPhase: boolean,
  direction: "left" | "right"
): CSSProperties {
  const translateX = direction === "left" ? "-15px" : "15px";
  const shouldShow = isVisible && (!isTransitioning || isFinalPhase);
  
  return {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: PANEL_CONFIG.gap,
    minHeight: 0,
    opacity: shouldShow ? 1 : 0,
    transform: shouldShow ? "translateX(0)" : `translateX(${translateX})`,
    transition: `all ${TRANSITION_CONFIG.contentDuration} ${TRANSITION_CONFIG.easing}`,
  };
}

// Header/Footer visibility styles
export function getHeaderFooterStyles(
  isVisible: boolean,
  delay?: string
): CSSProperties {
  return {
    display: "flex",
    alignItems: "center",
    gap: PANEL_CONFIG.gap,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(15px)",
    transition: `all ${TRANSITION_CONFIG.headerDuration} ${TRANSITION_CONFIG.headerEasing}${delay ? ` ${delay}` : ""}`,
    flexShrink: 0,
  };
}

// Typography styles
export const TYPOGRAPHY = {
  headerLabel: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.8125rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#5DE67A",
    whiteSpace: "nowrap" as const,
  },
  footerLabel: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.6875rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.35)",
    whiteSpace: "nowrap" as const,
  },
  cardTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#ffffff",
    marginBottom: "0.1rem",
  },
  cardTagline: (color: string) => ({
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 500,
    color,
    letterSpacing: "0.02em",
  }),
  cardDescription: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.8125rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.4,
    marginBottom: "0.5rem",
    flex: 1,
  },
  valueNumber: (color: string) => ({
    fontFamily: "'Outfit', sans-serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    color,
    lineHeight: 1,
  }),
  valueLabel: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#ffffff",
    marginTop: "0.15rem",
  },
  valueDescription: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.8125rem",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.4,
    marginTop: "auto",
  },
} as const;

// Gradient line styles
export function getGradientLineStyles(direction: "left" | "right"): CSSProperties {
  const gradientDirection = direction === "left" ? "90deg" : "270deg";
  return {
    flex: 1,
    height: "1px",
    background: `linear-gradient(${gradientDirection}, #5DE67A, transparent)`,
  };
}

export function getFooterLineStyles(direction: "left" | "right"): CSSProperties {
  const gradientDirection = direction === "left" ? "90deg" : "270deg";
  return {
    flex: 1,
    height: "1px",
    background: `linear-gradient(${gradientDirection}, rgba(255,255,255,0.15), transparent)`,
  };
}

