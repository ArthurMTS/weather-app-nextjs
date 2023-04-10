/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': '#3472DB',
      'gray': '#8492a6',
      'light': '#E3F6FE',
      'white': '#EFEFEF',
      'black': '#03020D',
      'dark': '#273444',
    },
  },
  plugins: [],
}