/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  
      fontFamily: {
        kablammo: [ "Poppins", "sans-serif" ],
    },
    colors: {
      'color-blue': '#22637E',
      'color-black': '#141718',
      'color-white': '#FFFFFF',
      'color-gray': '#6C7275',
      'color-yellow': '#FFC000',
      'color-red': '#FF0000',
      'color-grayish': '#F6F6F6',
    }
  },
  },
  plugins: [],
};