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
        "primary-three": "var(--primary-three)",
        "primary-four": "var(--primary-four)",
        "hero-bg": "var(--hero-bg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
