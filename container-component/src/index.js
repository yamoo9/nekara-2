import './styles/global.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app/App';
import { AppHeader } from './components'

// static method (sync)
// import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <App>
      <AppHeader />
    </App>
  </StrictMode>,
  document.getElementById('root')
);

// React 앱은 Node.js 환경에서 컴파일 되므로
// process.env를 사용할 수 있다.
const { NODE_ENV: devOrProdMode } = process.env;

// dynamic import (async)
// 어디서나 호출 가능
// reportWebVitals();
// 빌드 할 때만, reportWebVitals 모듈 동적 호출
if (devOrProdMode.includes('production')) {
  
  // Promise 방식
  import('./reportWebVitals')
    .then(({ reportWebVitals }) => reportWebVitals(console.log))
    .catch(({ message }) => console.error(message));

  // Async 함수 방식으로 변경해보세요.

}
