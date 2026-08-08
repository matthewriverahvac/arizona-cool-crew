import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070706",
        charcoal: "#11100e",
        surface: "#171511",
        gold: "#d8a63a",
        "gold-light": "#f0c86c",
        sand: "#d8c6a3",
        cream: "#f7f1e5"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 18px 60px rgba(216, 166, 58, 0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;
