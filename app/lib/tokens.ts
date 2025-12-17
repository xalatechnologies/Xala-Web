/**
 * Xala Design Tokens
 * Merged system: Xala Green (Primary) + Pure Minerals (Secondary)
 */

export const tokens = {
  colors: {
    // Primary Brand - Xala Green
    xala: {
      DEFAULT: "#5DE67A",
      bright: "#7AFF97",
      dark: "#2EB65B",
      glow: "rgba(93, 230, 122, 0.5)",
      glowLight: "rgba(93, 230, 122, 0.15)",
      glowSubtle: "rgba(93, 230, 122, 0.08)",
    },

    // Secondary - Pure Minerals
    copper: {
      DEFAULT: "#b87333",
      light: "#d4956a",
      dark: "#8b5a2b",
      glow: "rgba(184, 115, 51, 0.5)",
    },
    patina: {
      DEFAULT: "#4a7c6f",
      light: "#6b9e8f",
      dark: "#3a5f54",
    },

    // Accent Colors
    accent: {
      cyan: "#00d4ff",
      blue: "#3b82f6",
      purple: "#a855f7",
      gold: "#f59e0b",
    },

    // Backgrounds
    bg: {
      DEFAULT: "#030305",
      elevated: "#080810",
      surface: "rgba(255, 255, 255, 0.02)",
      surfaceHover: "rgba(93, 230, 122, 0.05)",
    },

    // Borders
    border: {
      DEFAULT: "rgba(255, 255, 255, 0.06)",
      hover: "rgba(93, 230, 122, 0.2)",
      subtle: "rgba(255, 255, 255, 0.1)",
    },

    // Text
    text: {
      DEFAULT: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.8)",
      muted: "rgba(255, 255, 255, 0.5)",
      dim: "rgba(255, 255, 255, 0.25)",
    },
  },

  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
  },

  fontSizes: {
    displayXl: "clamp(2.5rem, 5vw, 4rem)",
    displayLg: "clamp(1.75rem, 4vw, 3rem)",
    displayMd: "clamp(1.1rem, 2.5vw, 1.8rem)",
    headingLg: "1.3rem",
    headingMd: "1.1rem",
    bodyLg: "1.1rem",
    bodyMd: "0.85rem",
    labelLg: "0.85rem",
    labelMd: "0.75rem",
    labelSm: "0.65rem",
    tag: "0.65rem",
  },

  spacing: {
    nav: "80px",
  },

  animation: {
    duration: {
      fast: "0.2s",
      normal: "0.4s",
      slow: "0.7s",
      verySlow: "1s",
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  shadows: {
    glow: "0 0 20px",
    glowLg: "0 0 40px",
    glowXl: "0 0 60px",
    card: "0 25px 50px rgba(0, 0, 0, 0.4)",
    cardHover: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(93, 230, 122, 0.1)",
  },

  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    "2xl": "30px",
    full: "9999px",
  },
} as const;

// Type exports for TypeScript consumers
export type TokenColors = typeof tokens.colors;
export type TokenFonts = typeof tokens.fonts;
export type TokenAnimation = typeof tokens.animation;
