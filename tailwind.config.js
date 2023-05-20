/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:"#root",
  theme: {
    extend: {
      colors: {
        'search-color': '#2a2a2a',
      }
    },
  },
  plugins: [],
}

