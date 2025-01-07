/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Eagle: ["Eagle Lake"],
        Tapestary: ["Tapestry"],
        Carattere: ["Carattere"],
        Playfair: ["Playfair"],
        Funnel: ["Funnel Display"],
        Lora: ["'Lora'", "serif"],
        Poppins: ["'Poppins'", "sans-serif"],
        GreatVibes: ["GreatVibes"],
        Lato : ["Lato"],
        Quicksand:["Quicksand"],
        Lora:["Lora"],
        Montserrat:["Montserrat"],
        Protest:["Protest Revolution"],
        Quintessential:["Quintessential"]

      },
      keyframes: {
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideInUp: 'slideInUp 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}