import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#faf5e8",
        "paper-deep": "#f3ecd6",
        cream: "#fff9ec",
        ink: "#0e1f15",
        "ink-2": "#3d513f",
        leaf: "#3a8b1e",
        "leaf-bright": "#65c537",
        forest: "#0f5236",
        "forest-deep": "#0a3a25",
        sage: "#bee49b",
        "pale-leaf": "#e2eed1",
        blush: "#f0bdb0",
        "blush-deep": "#d68b7c",
        rose: "#e6a39a",
        gold: "#c89a3c",
        sun: "#f4d76b",
      },
      fontFamily: {
        display: ["var(--font-gloock)", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
        script: ["var(--font-homemade-apple)", "cursive"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 8px rgba(14,31,21,.08)",
        md: "0 18px 48px rgba(14,31,21,.16)",
        lg: "0 38px 80px rgba(14,31,21,.22)",
      },
      keyframes: {
        roll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        strip: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        twink: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.1) rotate(15deg)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-6px)" },
        },
        pulse: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        fall: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(120vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        roll: "roll 32s linear infinite",
        strip: "strip 50s linear infinite",
        twink: "twink 2.4s infinite ease-in-out",
        "spin-slow": "spinSlow 14s linear infinite",
        bob: "bob 2.4s infinite ease-in-out",
        pulse: "pulse 2s infinite",
        fall: "fall 2.4s ease-in forwards",
      },
    },
  },
  plugins: [],
};
export default config;
