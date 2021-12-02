import { Logo, IconButton } from './components/index.js';

const { React, ReactDOM } = window;

ReactDOM.render(
  <div className="more-shoes-shop">
    <Logo />
    <IconButton />
    <IconButton shape="cart" />
  </div>,
  document.getElementById('root')
);
