import './reportWebVitals';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyle } from 'styles/global.styled';
import { AuthProvider, ThemeProvider } from 'contexts';
import App from 'App';

render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
