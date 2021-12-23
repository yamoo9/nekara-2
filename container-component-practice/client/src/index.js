import 'styles/global.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App.backup';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
