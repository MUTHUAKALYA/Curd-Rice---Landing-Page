/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#13547a',
      'light-blue': '#80d0c7',
      'white':'#FFF',
      'black':'#000'
    },
    extend: {},
  },
  plugins: [],
}