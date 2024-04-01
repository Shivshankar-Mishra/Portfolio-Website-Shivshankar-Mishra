/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bai-jamjuree': ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}