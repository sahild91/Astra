/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        astraYellow: "#FFC800",
        astraBlack: "#050505",
        offWhite: "#F8F9FA",
        skyBlue: "#4fb4e3",
        cosmicPurple: "#5b24e5",
        starPink: "#f72d3e",
        spaceGreen: "#55e794",
        spaceOrange: "#f7812e",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};