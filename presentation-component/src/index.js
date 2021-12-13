import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App, Banner } from './components';
import bannerImagePath from './assets/cover/good-influence.jpg';

render(
  <StrictMode>
    <App greetingMessage={'Presentational Component'}>
      <Banner
        url={bannerImagePath}
        width={374}
        height={800}
        style={{ border: '20px solid #fff' }}
      >
        선한 영향력 = 플라스틱으로부터 바다를 지키는 능력 우리 모두를 생각하는
        &lsquo;선한 영향력&rsquo;이 더 큰 영향력이 되도록 SK도 노력하겠습니다.
        모두가 함께, 행복하도록 OK! SK
      </Banner>
    </App>
  </StrictMode>,
  document.getElementById('root')
);
