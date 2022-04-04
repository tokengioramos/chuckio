import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto Serif';
  }

  body {
    margin:0;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.body};

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`
