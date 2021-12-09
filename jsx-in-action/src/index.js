import './styles/global.css';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { ListRedering } from './App';

render(
  <StrictMode>
    <ListRedering />
  </StrictMode>,
  document.getElementById('root')
);
