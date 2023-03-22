/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#FFE7C8',
        'purple': {
          400: '#160F38'
        },
        'gold': {
          400: '#C6996A'
        }
      },
    },
  },
  plugins: [],
}