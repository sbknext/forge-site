import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        ink: {
          900: "#0a0a0a",
          800: "#111113",
          700: "#1a1a1d",
          600: "#26262b",
          500: "#3a3a42",
          400: "#6b6b75",
          300: "#9a9aa3",
          200: "#c8c8d0",
          100: "#e8e8ec",
        },
        ember: {
          500: "#ff7a1a",
          400: "#ff944d",
        },
      },
    },
  },
  plugins: [],
};

export default config;
