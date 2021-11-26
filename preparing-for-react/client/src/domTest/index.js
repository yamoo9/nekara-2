import { describe, test, expect } from '../utils/index.js';

const appNode = document.getElementById('app');

describe('DOM 테스트', () => {
  // 문서의 제목이 "React 앱 개발환경 구성" 인가?
  test('문서의 제목이 "React 앱 개발환경 구성" 인가?', () => {
    expect(document.title).toBe('React 앱 개발환경 구성');
  });
  // 문서에 #app 요소가 존재하는가?
  test('문서에 #app 요소가 존재하는가?', () => {
    expect(appNode).toBeInTheDocoument();
  });
  // #app 요소 안에 제목 요소가 포함되어 있나?
  test('#app 요소 안에 제목 요소가 포함되어 있나?', () => {
    const hasHeadlineElement = !!appNode.querySelector('h1,h2,h3,h4,h5,h6');
    expect(hasHeadlineElement).toBeTruthy();
  });
  // 제목의 내용은 "React 앱 개발"
  test('제목의 내용은 "React 앱 개발"', () => {
    const headlineNode = appNode.querySelector('h1,h2,h3,h4,h5,h6');
    expect(headlineNode.textContent).toBe('React 앱 개발');
  });
  // 제목 요소는 headline 클래스를 포함하는가?
  test('제목 요소는 headline 클래스를 포함하는가?', () => {
    const headlineNode = appNode.querySelector('h1,h2,h3,h4,h5,h6');
    // expect(headlineNode.classList.contains('headline')).toBeTruthy();
    expect(headlineNode).toHaveClass('headline');
  });
});