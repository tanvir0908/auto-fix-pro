/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Poppins", "serif"],
    },
    colors: {
      primary: "#8F00FF",
      secondary: "#A532FF",
      "text-primary": "#151515",
      "text-secondary": "#444",
      "text-light": "#737373",
    },
  },
  plugins: [require("daisyui")],
};
