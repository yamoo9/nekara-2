import 'styles/global.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ConditionalRendering } from './App';

render(
  <StrictMode>
    <ConditionalRendering />
  </StrictMode>,
  document.getElementById('root')
);
