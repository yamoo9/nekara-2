import './reportWebVitals';
import { GlobalStyle } from 'styles/global.styled';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'App';

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
