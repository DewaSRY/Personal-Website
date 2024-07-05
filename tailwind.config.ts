import type { Config } from "tailwindcss";

const config = {
  // darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "primary-one": "var(--primary-one)",
        "primary-one-alfa": "var(--primary-one-alfa)",
        "primary-one-beta": "var(--primary-one-beta)",
        "primary-two": "var(--primary-two)",
        "primary-two-alfa": "var(--primary-two-alfa)",
        "primary-three": "var(--primary-three)",
        "primary-three-alfa": "var(--primary-three-alfa)",
        "primary-four": "var(--primary-four)",
        "primary-four-alfa": "var(--primary-four-alfa)",
        "primary-five": "var(--primary-five)",
        "hero-bg": "var(--hero-bg)",
        footer: "var(--footer)",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-fit-max-600": "repeat(auto-fit, minmax(1fr, 600px))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
