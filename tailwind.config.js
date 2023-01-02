/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './structure/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          'base-primary': 'var(--text-base-primary)',
          'base-secondary': 'var(--text-base-secondary)',
          primary: 'var(--text-color-primary)',
          secondary: 'var(--text-color-secondary)'
        }
      },
      backgroundColor: {
        skin: {
          'base-primary': '#171717',
          'base-secondary': '#111111',
          primary: '#4f46e5',
          secondary: '#ea580c',
          danger: '#dc2626',
          success: '#16a34a',
          caution: '#ca8a04'
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
}
