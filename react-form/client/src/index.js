import './reportWebVitals';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global.styled';
import { render } from 'react-dom';
import App from 'App';

render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
