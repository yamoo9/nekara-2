import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App, A11yHidden } from './components';

render(
  <StrictMode>
    <App greetingMessage={'Presentational Component'}>
      <A11yHidden as="a" focusable href="#demo" rel="noopener norefferer">
        I&apos;m Invisible
      </A11yHidden>

      <A11yHidden as="div" tabIndex={-1} id="invisible">
        I&apos;m Invisible 2
      </A11yHidden>

      <A11yHidden as="figure" className="figure-invisible">
        I&apos;m Invisible 3
      </A11yHidden>
    </App>
  </StrictMode>,
  document.getElementById('root')
);
