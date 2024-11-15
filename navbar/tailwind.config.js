/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      screens: {
        sm: "479px",
      },

      fontFamily: {
        eagle: ['"Eagle Lake"', 'cursive'],
        cookie: ['"Cookie"', 'cursive'],
        Faculty:['"Faculty Glyphic"', 'sans-serif']
    },
  },
  plugins: [],
}
}
