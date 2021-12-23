import { useState, useEffect } from 'react';

export const useName = (initialName = 'euid') => {
  const [name, setName] = useState('euid');
  useEffect(() => {
    console.group('name 업데이트 된 경우');
    console.log('changed name:', name);
    console.groupEnd();
  }, [name]);

  return [name, setName];
};
