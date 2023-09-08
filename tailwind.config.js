const { transform } = require('framer-motion')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          'from': {transform: 'translateX(0)'},
          'to': {transform: 'translateX(-100%)'},
        }
      },
      animation: {
        slide: 'slide 40s linear infinite',
      }
    },
  },
  plugins: [],
}

