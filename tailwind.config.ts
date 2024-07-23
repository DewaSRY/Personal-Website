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
        footer: "var(--footer)",
        "primary-one": "#222831",
        "primary-two": "#31363F",
        "primary-three": "#567D80",
        "primary-four": "#399966",
        "black-one": "#222426",
        "black-two": "#0F1726",
        "white-one": "#B1F2FF",
        "white-two": "#F2F7FF",
        "white-three": "#F2F7FF",
        "white-alfa": "rgba(110, 110, 110, 0.504)",
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
      backgroundImage: {
        "gradient-one":
          "linear-gradient(90deg, rgba(34,40,49,1) 0%, rgba(105,123,151,1) 100%)",
        "gradient-two":
          " linear-gradient(90deg, rgba(118,171,174,1) 0%, rgba(49,71,72,1) 100%)",
        "gradient-three":
          "linear-gradient(90deg, rgba(80,216,144,1) 0%, rgba(42,114,76,1) 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
