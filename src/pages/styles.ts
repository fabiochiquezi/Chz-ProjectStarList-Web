import { createGlobalStyle } from 'styled-components'

export const luxuryThemeSetting = {
  name: 'luxury',
  defaultTheme: false,
  state: 'dark',
  primary: '#ea580c',
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
  danger: '#dc2626',
  success: '#16a34a',
  caution: '#ca8a04'
}

export const corporateThemeSetting = {
  name: 'corporate',
  defaultTheme: true,
  state: 'clear',
  primary: '#818cf8',
  secondary: '#ea580c',
  'secondary-v2': '#4f46e5',
  'font-primary': '#222',
  'font-primary-inverse': '#fff',
  'font-secondary': '#444',
  'font-clear': '#fff',
  'font-dark': '#171717',
  'base-primary': '#fff',
  'base-primary-inverse': '#222',
  'base-secondary': '#eee',
  danger: '#dc2626',
  success: '#16a34a',
  caution: '#ca8a04'
}

export const themes = [corporateThemeSetting, luxuryThemeSetting]
export const currentTheme = { ...luxuryThemeSetting }

export const GlobalStyle = createGlobalStyle`
  ${themes.map(theme => `
    .${theme.defaultTheme ? 'default-theme' : theme.name} {
      --primary: ${theme.primary};
      --secondary: ${theme.secondary};
      --secondary-v2: ${theme['secondary-v2']};

      --font-primary: ${theme['font-primary']};
      --font-primary-inverse: ${theme['font-primary-inverse']};
      --font-secondary: ${theme['font-secondary']};
      --font-clear: ${theme['font-clear']};
      --font-dark: ${theme['font-dark']};

      --base-primary: ${theme['base-primary']}};
      --base-primary-inverse: ${theme['base-primary-inverse']};
      --base-secondary: ${theme['base-secondary']};

      --danger: ${theme.danger};
      --success: ${theme.success};
      --caution: ${theme.caution};
    }
  `)}

  html,
  body {
    font-family: 'Roboto';
  }

  /* ScrollBar */
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(237, 237, 237);
    border-radius: 40px;
  }

  ::-webkit-scrollbar-track {
    background-color: #4f46e5;
  }

  /* Placeholder */
  ::-webkit-input-placeholder {
    color: #dc2626;
    font-size: 15px;
  }

  :-ms-input-placeholder {
    color: #dc2626;
    font-size: 15px;
  }

  ::placeholder {
    color: #dc2626;
    font-size: 15px;
  }
`
