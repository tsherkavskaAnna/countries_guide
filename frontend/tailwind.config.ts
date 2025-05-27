/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,cjs,mjs,ts,cts,mts,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'raleway': ['Raleway']
      },
      backgroundImage: {
        'hero': "url('/images/world-map.png')",
      }
    },
  },
  plugins: [],
};
