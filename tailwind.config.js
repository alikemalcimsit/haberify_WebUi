/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors:{"text-color": "#242424",
      "scroolbar-track":"#E4E4E4",
      "profilebg":"#0A0E11"
    }
      


    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
