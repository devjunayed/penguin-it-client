import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        moveOnce: "moveOnce 7s ease-in-out infinite", // Slow movement animation
        glow: "glow 1.5s infinite alternate", // Glowing effect
      },
      keyframes: {
        moveOnce: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(calc(100vw - 100%), calc(100vh - 100%))" },
          "100%": { transform: "translate(calc(100vw - 100%), calc(100vh - 100%))" },
        },
        glow: {
          "0%": { 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)" // Increased glow
          },
          "100%": { 
            boxShadow: "0 0 60px rgba(255, 255, 255, 1), 0 0 120px rgba(255, 255, 255, 0.8)" // Stronger glow at peak
          },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)", // Base glow
      },
    },
  },
  plugins: [],
} satisfies Config;
