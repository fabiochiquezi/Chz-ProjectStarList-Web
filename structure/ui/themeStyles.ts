import { createGlobalStyle } from 'styled-components'
import { themes, themeBase } from '../../src/pages/themes'

export const currentTheme = themes.filter(theme => theme.defaultTheme)[0]

export const GlobalStyles = createGlobalStyle`
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

      --base-primary: ${theme['base-primary']};
      --base-primary-inverse: ${theme['base-primary-inverse']};
      --base-secondary: ${theme['base-secondary']};

      --danger: ${theme.danger};
      --success: ${theme.success};
      --caution: ${theme.caution};
    }
  `)}

  /* ScrollBar */
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${currentTheme['scroolbar-thumb']};
    border-radius: 40px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${currentTheme['scrollbar-track']};
  }

  /* Placeholder */
  ::-webkit-input-placeholder {
    color: ${themeBase.red};
    font-size: 15px;
  }

  :-ms-input-placeholder {
    color:${themeBase.red};
    font-size: 15px;
  }

  ::placeholder {
    color: ${themeBase.red};
    font-size: 15px;
  }

  /* Skeleton */
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 20%);
    }
    100% {
      background-color: hsl(200, 20%, 30%);
    }
  }
}
`
