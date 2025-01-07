/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Markazi: ["Markazi Text", "serif"],
        DM:["DM Serif Text"],
        Newsreader:["Newsreader"]
      },

      keyframes:{
        fadeIn:{
          '0%':{opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        fadeIn:' fadeIn 3s ease-in-out'
      }
    },
  },
  plugins: [],
}

