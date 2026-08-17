import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#08070a",
          900: "#0c0b0e",
          850: "#111014",
          800: "#17151a",
          700: "#211f25",
          600: "#2c2a31",
        },
        gold: {
          100: "#f3e9d2",
          200: "#e6d3a8",
          300: "#d8bd80",
          400: "#c9a86a",
          500: "#b3915a",
          600: "#8f7448",
        },
        sea: {
          400: "#5c8b8a",
          500: "#3f6a6b",
          600: "#2c4e50",
        },
        ivory: "#f4efe6",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,106,0.08), transparent 70%)",
        grain: "url('/textures/grain.svg')",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 80px -20px rgba(201,168,106,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
