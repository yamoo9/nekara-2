import { useState, useEffect } from 'react';

// this.setState({prop: newPropValue}, () => {
//   상태 업데이트 후에 콜백 실행 (처리)
// })

export const useName = (initialName = 'euid') => {
  // useState() → [상태, 상태 업데이트 함수]
  const [name, setName] = useState('euid');

  // useEffect() → 이펙트 처리 (의존하는 상태가 변경되면 콜백 함수를 실행합니다.)
  useEffect(() => {
    console.group('name 업데이트 된 경우');
    console.log('changed name:', name);
    console.groupEnd();
  }, [name]);

  return [name, setName];
};
