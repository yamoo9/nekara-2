import { describe, test, expect } from '../utils/index.js';

const appNode = document.getElementById('app');
const headlineNode = appNode.querySelector('h1,h2,h3,h4,h5,h6');

describe('DOM 테스트', () => {
  test('문서의 제목이 "React 앱 개발환경 구성" 인가?', () => {
    expect(document.title).toBe('React 앱 개발환경 구성');
  });
  test('문서에 #app 요소가 존재하는가?', () => {
    expect(appNode).toBeInTheDocoument();
  });
  test('#app 요소 안에 제목 요소가 포함되어 있나?', () => {
    const hasHeadlineElement = !!appNode.querySelector('h1,h2,h3,h4,h5,h6');
    expect(hasHeadlineElement).toBeTruthy();
  });
  test('제목의 내용은 "React 앱 개발"', () => {
    expect(headlineNode.textContent).toBe('React 앱 개발');
  });
  test('제목 요소는 headline 클래스를 포함하는가?', () => {
    expect(headlineNode).toHaveClass('headline');
  });
});
