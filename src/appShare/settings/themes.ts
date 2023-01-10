export const themeBase = {
  red: '#dc2626',
  green: '#16a34a',
  yellow: '#ca8a04'
}

export const themes = [
  {
    name: 'luxury',
    defaultTheme: true,
    state: 'dark',

    primary: '#ea580c',
    'primary-v2': '#fb923c',
    secondary: '#4f46e5',
    'secondary-v2': '#3730a3',

    'font-primary': '#fff',
    'font-primary-inverse': '#171717',
    'font-secondary': 'rgb(237, 237, 237)',
    'font-clear': '#fff',
    'font-dark': '#171717',

    'base-primary': '#171717',
    'base-primary-inverse': '#fff',
    'base-secondary': '#111111',

    danger: themeBase.red,
    success: themeBase.green,
    caution: themeBase.yellow,
    'scroolbar-thumb': 'rgb(237, 237, 237)',
    'scrollbar-track': '#4f46e5'
  },
  {
    name: 'corporate',
    defaultTheme: false,
    state: 'clear',

    primary: '#fdba74',
    'primary-v2': '#fb923c',
    secondary: '#a5b4fc',
    'secondary-v2': '#3730a3',

    'font-primary': '#333',
    'font-primary-inverse': '#fff',
    'font-secondary': '#888',
    'font-clear': '#fff',
    'font-dark': '#171717',

    'base-primary': '#fff',
    'base-primary-inverse': '#222',
    'base-secondary': '#eee',

    danger: themeBase.red,
    success: themeBase.green,
    caution: themeBase.yellow,
    'scroolbar-thumb': '#ea580c',
    'scrollbar-track': '#fff'
  }
]
export default themes

export const currentTheme = themes.filter(theme => theme.defaultTheme)[0]

