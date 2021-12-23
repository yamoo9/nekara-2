import { useState, useEffect } from 'react';

export const useA = (initialA) => {
  const [a, setA] = useState(initialA);
  useEffect(() => {
    console.group('a 변경된 경우');
    console.log('changed a:', a);
    console.groupEnd();
  }, [a]);

  return [a, setA];
};
