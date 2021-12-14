import './styles/global.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app/App';

render(
  <StrictMode>
    <App></App>
  </StrictMode>,
  document.getElementById('root')
);

const { NODE_ENV: devOrProdMode } = process.env;

if (devOrProdMode.includes('production')) {
  
  // Promise 방식
  import('./reportWebVitals')
    .then(({ reportWebVitals }) => reportWebVitals(console.log))
    .catch(({ message }) => console.error(message));

  // Async 함수 방식으로 변경해보세요.

}
