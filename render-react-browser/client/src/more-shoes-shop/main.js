import { Logo } from './components/index.js';

const { React, ReactDOM } = window;

ReactDOM.render(
  <div className="more-shoes-shop">
    {/* normal version */}
    <Logo />
    {/* variation version */}
    <Logo label="더더욱 더~~" />
    <Logo textColor="salmon" dotColor="darkgreen" />
  </div>,
  document.getElementById('root')
);
