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
        "white-three": "#ADFBFF",
        "white-alfa": "rgba(0, 0, 0, 0.704)",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fit-150": "repeat(auto-fit, minmax(150px, 1fr))",
        "auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-fit-350": "repeat(auto-fit, minmax(350px, 1fr))",
        "auto-fit-750": "repeat(auto-fit, minmax(750px, 1fr))",
        "auto-fit-max-600": "repeat(auto-fit, minmax(1fr, 600px))",
      },

      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
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
