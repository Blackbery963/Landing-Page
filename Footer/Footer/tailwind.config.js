/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        eagle:['"Eagle Lake"', 'sans serif'],
        cookie: ['"Cookie"', 'cursive'],
        news: [ '"Newspaper"', 'serif'],
        dmserif:['"DM Serif Text"', 'serif']
      }
    },
  },
  plugins: [],
}

