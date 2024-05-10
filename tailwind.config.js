/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a1a1a",
        darkForeground: "#2a2a2a",
        darkText: "#e5e5e5",
        pink: "#E93D81",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
