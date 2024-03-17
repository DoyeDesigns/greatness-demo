import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
export default config;
