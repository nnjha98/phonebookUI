const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        yellow: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
        gray: colors.coolGray,
        red: colors.red,
        green: colors.emerald,
        indigo: colors.indigo,
        purple: colors.violet,
        
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
