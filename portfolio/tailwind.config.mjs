/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        background2: "rgb(var(--background-2))",
        foreground: "rgb(var(--foreground))",
        secondary: "rgb(var(--secondary-color))",
        tertiary: "rgb(var(--tertiary-color))",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-space-mono)'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
