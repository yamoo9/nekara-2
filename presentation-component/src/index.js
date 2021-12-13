/* eslint-disable react/jsx-no-undef */
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Banner } from './components';
import bannerImagePath from './assets/cover/good-influence.jpg';
import bannerImagePath2 from './assets/cover/happiness-world.jpg';

render(
  <StrictMode>
    <>
      <Banner
        as="div"
        id="banner-unique-1"
        className="banner-extends"
        url={bannerImagePath}
        width={374}
        height={800}
        style={{ border: '20px solid #fff' }}
      >
        선한 영향력 = 플라스틱으로부터 바다를 지키는 능력 우리 모두를 생각하는
        &lsquo;선한 영향력&rsquo;이 더 큰 영향력이 되도록 SK도 노력하겠습니다.
        모두가 함께, 행복하도록 OK! SK
      </Banner>

      <Banner url={bannerImagePath2} width={374} height={800}>
        세상.행복하길 지구가 더 깨끗해지길 사회는 함께 더 따뜻해지길 기업은
        신뢰와 함께 더 따뜻해지길 SK가 ESG로 만들어가는 길 지구도 사회도 기업도
        지속가능한 행복으로 가는길입니다 ESG로 세상.행복하도록
      </Banner>
    </>
  </StrictMode>,
  document.getElementById('root')
);
