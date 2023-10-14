const defaultTheme = require('tailwindcss/defaultTheme')

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
    },
  },
  plugins: [],
}

