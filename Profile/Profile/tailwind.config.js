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
        Playfair: ["Playfair Display"],
        Markazi: ["Markazi Text"]
      }
    },
  },
  plugins: [],
}

