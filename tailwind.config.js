/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'champagne': {
          50: '#fefdf8',
          100: '#fdfbf0',
          200: '#f8f5e0',
          300: '#f1ead0',
          400: '#e8dcbb',
          500: '#ddc8a3',
          600: '#d0b68c',
          700: '#c1a376',
          800: '#a88964',
          900: '#8b7354',
        },
        'charcoal': {
          50: '#f7f7f8',
          100: '#ededee',
          200: '#d6d7d8',
          300: '#b5b7b9',
          400: '#8a8d90',
          500: '#686b6f',
          600: '#54575b',
          700: '#45474a',
          800: '#3a3c3f',
          900: '#323437',
        },
        'soft-white': '#fefdf8',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
