/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},

  // custom fonts go here 
  fontFamily:{
    sans:['Inter','sans-serif']
  }
  },
  plugins: [],

}
