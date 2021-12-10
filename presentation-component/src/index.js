import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './components';
render(
  <StrictMode>
    <App greetingMessage={'Presentational Component'} />
  </StrictMode>,
  document.getElementById('root')
);
