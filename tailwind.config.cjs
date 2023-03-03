/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat, sans-serif",
      },
      colors: {
        primary: "#3A1078",
        secondary: "#2F58CD",
        info: "#3795BD",
        accent: "#3795BD",
      },
    },
  },
  plugins: [],
};
