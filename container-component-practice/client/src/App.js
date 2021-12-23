import React from 'react';
import { TiltCardContainer } from 'containers';

export default function App() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    // 이벤트 구독
    console.log('이벤트 구독');
    let clearId = null;
    const timeNode = document.querySelector('time');
    if (timeNode) {
      clearId = setInterval(() => {
        // DOM 스크립트
        timeNode.textContent = new Date().toLocaleTimeString();
      }, 1000);
    }

    // 클린업 함수 (이펙트 함수가 반환하는 함수)
    return function cleanup() {
      // 이벤트 구독 취소
      console.log('이벤트 구독 취소');
      // 이펙트 함수가 다시 실행되기 전에 정리
      clearInterval(clearId);
    };
  }, [visible]);

  return (
    <>
      <TiltCardContainer />
      <button type="button" onClick={() => setVisible(!visible)}>
        toggle visible
      </button>
      <br />
      {visible ? <time /> : null}
    </>
  );
}
