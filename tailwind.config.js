const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'cyan':colors.cyan,
        'teal':colors.teal
      }
    },
  },
  plugins: [],
}

