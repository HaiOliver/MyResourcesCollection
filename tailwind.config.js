const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      gold: {
        light: '#ddbf5f',
        base: '#d4af37',
        dark: '#aa8c2c'
},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
