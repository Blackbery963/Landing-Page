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
        dancing: ['"Dancing Script"', 'cursive'],
    },
  },
  plugins: [],
}
}
