import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      backgroundImage: {
        'login-hero': "url('https://img.freepik.com/free-vector/realistic-galaxy-background_23-2150884647.jpg')",
      },
      colors: {
        'primary-color': '#343a40',
        'secondary-color': '#f8f9fa',
        'accent-color': '#dee2e6',
        'primary-color-hover': '#243c5a',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config