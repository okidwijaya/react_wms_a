/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mediumBlack: "#121212",
        mediumGrey: "#343a40",
        lightGrey: "#dee2e6",
        bgBase: "#212529",
        bgSecondary: "#ced4da",
        textBase: "#f8f9fa",
      },
    },
  },
  plugins: [],
};