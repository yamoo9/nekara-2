import 'styles/global.css';
import './reportWebVitals';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
