import { useState, useEffect } from 'react';

// 사용자 정의(custom) 훅 (use* 함수)
export const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.group('count 업데이트 된 경우');
    console.log('changed count:', count);
    console.groupEnd();
  }, [count]);

  return [count, setCount];
};
