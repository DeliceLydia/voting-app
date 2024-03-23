/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        intel: ['Intel', 'sans-serif'],
        irish: ['irish Grover']
      },
    },
  },
  plugins: [],
}