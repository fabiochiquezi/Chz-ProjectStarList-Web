/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      backgroundColor: {
        primary: '#171717'
      },
      colors: {
        primary: '#FA7723',
        secondary: '#39577F'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      }
    }
  },
  plugins: []
}
