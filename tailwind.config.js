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
      'main': '#4F6796',
      'gray': '#8492a6',
      'light': '#DCDDEB',
      'white': '#F7F7F7',
      'black': '#03020D',
      'dark': '#3C3B50',
    },
  },
  plugins: [],
}