import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font: 1rem/1.5 'Spoqa Han Sans Neo';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body *,
  body *::before,
  body *::after {
    -webkit-tap-highlight-color: rgba(250 250 0 / 2%);
    box-sizing: border-box;
  }

  img {
    vertical-align: middle;
  }

  [disabled] {
    cursor: not-allowed;
  }
  
  button {
    cursor: pointer;
  }


  button:focus:not(:focus-visible) {
    outline: none;
  }

  abbr[title] {
    cursor: help;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
