import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto Serif';
  }

  body {
    margin:0;
    transition: all 0.50s linear;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.body};
  }
`
