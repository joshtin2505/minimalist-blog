import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
    colors: {
      primary: {
        "50": "#effef7",
        "100": "#dafeef",
        "200": "#b8fadd",
        "300": "#81f4c3",
        "400": "#43e5a0",
        "500": "#1acd81",
        "600": "#0fa968",
        "700": "#108554",
        "800": "#126945",
        "900": "#11563a",
        "950": "#03301f",
      },
      secondary: {
        "50": "#f4faf3",
        "100": "#d8f0d6",
        "200": "#caeac8",
        "300": "#a1d79e",
        "400": "#6fbd6b",
        "500": "#4ba047",
        "600": "#3a8336",
        "700": "#30682d",
        "800": "#2a5328",
        "900": "#234522",
        "950": "#0e250e",
      },
    },
    extend: {
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
