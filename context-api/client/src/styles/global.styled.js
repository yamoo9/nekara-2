import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font: 1rem/1.5 'Spoqa Han Sans Neo', Aria, sans-serif;
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
    font-family: inherit;
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

  .a11yHidden {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
  }
  
  caption.a11yHidden {
    position: static;
  }
  
  .a11yHidden.focusable:focus {
    visibility: initial;
    position: static;
    clip: auto;
    clip-path: unset;
    width: initial;
    height: initial;
    margin: initial;
    white-space: initial;
  }
`;
