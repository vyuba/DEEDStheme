/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snipets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {
      fontFamily: {
        Futura: ['Futura', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

