import type { Config } from "tailwindcss";

const config = {
  // darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
    "./contents/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
