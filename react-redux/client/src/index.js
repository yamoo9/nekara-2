import './reportWebVitals';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from 'styles/global.styled';
import { render } from 'react-dom';

import { StoreProvider } from './store';
import App from 'App';

/* -------------------------------------------------------------------------- */
/* React App                                                                  */
/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <HelmetProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
