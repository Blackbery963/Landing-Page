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
        markazi:['"Markazi Text"', 'serif']
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
  },
  plugins: [],
}
}
