import { createContext } from 'react';

const theme = {
  light: {
    background: '#323231',
    color: '#f2f2f3',
  },
  dark: {
    background: '#f2f2f3',
    color: '#323231',
  },
};

// 컨텍스트 객체 생성
const ThemeContext = createContext(theme);

// 컨텍스트.공급자
// 컨텍스트.수요자
// 컨텍스트 값을 반환하는 React 훅
