/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          primary: 'var(--primary)',
          'primary-v2': 'var(--primary-v2)',
          secondary: 'var(--secondary)',
          'secondary-v2': 'var(--secondary-v2)',

          'font-primary': 'var(--font-primary)',
          'font-secondary': 'var(--font-secondary)',
          'font-clear': 'var(--font-clear)',
          'font-dark': 'var(--font-dark)',

          'base-primary': 'var(--base-primary)',
          'base-primary-inverse': 'var(--base-primary-inverse)',
          'base-secondary': 'var(--base-secondary)',

          danger: 'var(--danger)',
          success: 'var(--success)',
          caution: 'var(--caution)'
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
