/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Tapestry:["Tapestry"],
        Eagle:["Eagle Lake"],
        Playfair:["Playfair"],
        Carattere:["Carattere"]
      }
    },
  },
  plugins: [],
}