/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // painters Diary
        eagle: ['"Eagle Lake"', 'cursive'],
        // the diary of every  artist
        cookie: ['"Cookie"', 'cursive'],
        // other button like home 
        playfair:['"Playfair Display"', 'serif'],
        // immerse yourself on art 
        // trade:['"Trade Winds"', 'cursive'],
        quint:['"Quintessential"', 'cursive'],
        // the next  of innerse
        markazi:['"Markazi Text"', 'serif'],
        Playfair:["Playfair Display"],
        Carattere:["Carattere"],
        news: [ '"Newspaper"', 'serif'],
        dmserif:['"DM Serif Text"', 'serif']
    },

    keyframes:{
      fadeIn:{
        '0%':{scale: '0'},
        '100%': {scale: '1'}
      }
    },
    animation: {
      fadeIn:' fadeIn 3s ease-in-out'
    }
,
    animation: {
      fadeIn: "fadeIn 1s ease-in-out",
      slideInUp: "slideInUp 0.8s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      slideInUp: {
        "0%": { transform: "translateY(20px)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
    },

    },
  },
  plugins: [],
}