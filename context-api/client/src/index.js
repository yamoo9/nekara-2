import './reportWebVitals';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from 'styles/global.styled';
import { render } from 'react-dom';
import { AuthProvider } from 'contexts';
import App from 'App';

render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
