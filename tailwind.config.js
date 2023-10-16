/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#13547a',
        'light-blue': '#80d0c7',
        'white':'#FFF',
        'black':'#000',
        'dark-green':'#7DC387',
        'light-green':'#DBE9EA',
      },
    },
  },
  plugins: [],
}

