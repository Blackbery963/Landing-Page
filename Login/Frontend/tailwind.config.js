/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        playfair:["Playfair", "serif"],
        unna:["Unna","serif"],
        eagle:["Eagle Lake", "serif"],
        cookie:["Cookie", "cursive"]
      }
    },
  },
  plugins: [],
}

