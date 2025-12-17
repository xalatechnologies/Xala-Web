import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Xala Green - Primary Brand
        xala: {
          DEFAULT: "#5DE67A",
          bright: "#7AFF97",
          dark: "#2EB65B",
          glow: "rgba(93, 230, 122, 0.5)",
          "glow-light": "rgba(93, 230, 122, 0.15)",
          "glow-subtle": "rgba(93, 230, 122, 0.08)",
        },
        // Pure Minerals - Secondary Accents
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
        // Background System
        bg: {
          DEFAULT: "#030305",
          elevated: "#080810",
          surface: "rgba(255, 255, 255, 0.02)",
          "surface-hover": "rgba(93, 230, 122, 0.05)",
        },
        // Border System
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          hover: "rgba(93, 230, 122, 0.2)",
          subtle: "rgba(255, 255, 255, 0.1)",
        },
        // Text System
        text: {
          DEFAULT: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.8)",
          muted: "rgba(255, 255, 255, 0.5)",
          dim: "rgba(255, 255, 255, 0.25)",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Custom type scale
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.2" }],
        "display-md": ["clamp(1.1rem, 2.5vw, 1.8rem)", { lineHeight: "1.8" }],
        "heading-lg": ["1.3rem", { lineHeight: "1.3" }],
        "heading-md": ["1.1rem", { lineHeight: "1.4" }],
        "body-lg": ["1.1rem", { lineHeight: "1.9" }],
        "body-md": ["0.85rem", { lineHeight: "1.6" }],
        "label-lg": ["0.85rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
        "label-md": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
        "label-sm": ["0.65rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
        tag: ["0.65rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        nav: "80px",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "30px",
      },
      backdropBlur: {
        xs: "4px",
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
        "pulse-glow-slow": "pulse-glow 12s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "border-flow": "border-flow 4s linear infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        "scroll-clients": "scroll-clients 45s linear infinite",
        "client-reveal": "client-reveal 0.8s ease forwards",
        "beam-scan": "beam-scan 8s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        "scroll-bounce": {
          "0%, 100%": {
            transform: "translateX(-50%) translateY(0)",
            opacity: "1",
          },
          "50%": {
            transform: "translateX(-50%) translateY(12px)",
            opacity: "0.3",
          },
        },
        "scroll-clients": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "client-reveal": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.8)",
            filter: "grayscale(1) brightness(2) blur(4px)",
          },
          "100%": {
            opacity: "0.25",
            transform: "translateY(0) scale(1)",
            filter: "grayscale(1) brightness(2) blur(0)",
          },
        },
        "beam-scan": {
          "0%": {
            transform: "translateY(-100%) scaleY(0.5)",
            opacity: "0",
          },
          "50%": { transform: "translateY(0%) scaleY(1)", opacity: "0.3" },
          "100%": {
            transform: "translateY(100%) scaleY(0.5)",
            opacity: "0",
          },
        },
      },
      boxShadow: {
        glow: "0 0 20px var(--tw-shadow-color)",
        "glow-lg": "0 0 40px var(--tw-shadow-color)",
        "glow-xl": "0 0 60px var(--tw-shadow-color)",
        card: "0 25px 50px rgba(0, 0, 0, 0.4)",
        "card-hover":
          "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(93, 230, 122, 0.1)",
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
