/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        eagle:["Eagle Lake", 'serif'],
        cookie:["Cookie", 'cursive'],
        playfair:["Playfair",'serif']
      }
      
    },
  },
  plugins: [],
}

