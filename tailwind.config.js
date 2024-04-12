/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#222222",
        mustard: "#C3CC5A",
        shade:"#303030",
        darkbg:"#222222",
        modal : "rgba(0, 0, 0, 0.5)"
      },
    },
  },
  plugins: [],
}

