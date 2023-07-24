/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#1f2b33',
        lightText: '#e1faf1',
        lightTextDark: '#c5d9d1',

        darkText: '#171717',
      }
    },
    fontFamily: {
      heading: ['Anton'],

    }
  },
  plugins: [],
}