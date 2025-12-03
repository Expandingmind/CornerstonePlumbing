import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1120', // Very dark blue
          900: '#0B1120',
          800: '#151e32',
          700: '#1e2b45',
          light: '#2a3b5e'
        },
        brand: {
          blue: '#3B82F6', // Primary Action Blue
          light: '#60A5FA',
          lighter: '#93C5FD',
        }
      },
    },
  },
  plugins: [],
};
export default config;

