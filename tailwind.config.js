/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:"#root",
  theme: {
    screens: {
      'tablet': '780px',
      'lg': '1100px',
      'mobile': '450px'

    }
  },
  plugins: [],
}

