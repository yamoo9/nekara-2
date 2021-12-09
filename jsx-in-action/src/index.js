import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { ConditionalRendering } from './App';

render(
  // 컴파운드(compound) 컴포넌트
  // React.createElement(React.StrictMode)
  <StrictMode>
    <ConditionalRendering />
  </StrictMode>,
  document.getElementById('root')
);
