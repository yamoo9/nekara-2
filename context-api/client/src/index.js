import './reportWebVitals';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from 'styles/global.styled';
import { render } from 'react-dom';
import App from 'App';

render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
