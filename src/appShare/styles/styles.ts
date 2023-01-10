import { createGlobalStyle } from 'styled-components'
import { themes, themeBase, currentTheme } from '../settings/themes'

export const Styles = createGlobalStyle`
/* Themes */
  ${themes.map(theme => `
    .${theme.defaultTheme ? 'default-theme' : theme.name} {
      --primary: ${theme.primary};
      --primary-v2: ${theme['primary-v2']};
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

/* Reset */
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden !important;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden !important;
  }
  a {
    text-decoration: none;
    transition: all 250ms ease;
  }
  a:active {
    transition: transform 50ms ease;
    transform: scale(0.95);
  }
  textarea:focus,
  input:focus,
  select:focus {
    outline: none;
  }
  input,
  select,
  textarea {
    color: #fff;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    color: #fff;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px rgb(23 23 23) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

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

/* Animations */
  .fadeIn-comeFromLeft {
    opacity: 0;
    animation: fadeInComeFromLeft 300ms forwards 300ms;

    @keyframes fadeInComeFromLeft {
      from {
        left: 48%;
        opacity: 0;
      }
      to {
        left: 50%;
        opacity: 1;
      }
    }
  }

  .fadeOut-comeFromLeft {
    opacity: 1;
    animation: fadeOutComeFromLeft 300ms forwards;

    @keyframes fadeOutComeFromLeft {
      from {
        left: 50%;
        opacity: 1;
      }
      to {
          left: 48%;
          opacity: 0;
        }
    }
  }

  .fade-out-anim {
    opacity: 1;
    transition: all 300ms ease;
    animation: fadeOut 300ms forwards 150ms;

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`
