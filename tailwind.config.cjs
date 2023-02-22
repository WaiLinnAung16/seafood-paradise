/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily:{
        primary: 'Montserrat, sans-serif'
      },
      colors:{
        primary:'#AD7BE9',
        secondary:'#3E54AC',
        info:'#BFDCE5',
        accent:'#EEEEEE'
      }
    },
  },
  plugins: [],
}
