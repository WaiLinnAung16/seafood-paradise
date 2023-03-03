/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat, sans-serif",
      },
      colors: {
        primary: "#3C2A21",
        secondary: "#1A120B",
        info: "#D5CEA3",
        accent: "#E5E5CB",
      },
    },
  },
  plugins: [],
};
