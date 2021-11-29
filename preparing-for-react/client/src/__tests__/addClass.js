// Jest 활용
// 작성할 유틸리티 함수 호출
import { addClass } from '../utils/dom/addClass.js';

test(`addClass(document.body, 'some') 함수 사용 시 document.body는 'some' 클래스 이름을 소유한다.`, () => {
  const targetNode = document.body;
  let addedClassName = 'some';
  addClass(targetNode, addedClassName);
  // expect(targetNode.classList.contains(addedClassName)).toBeTruthy();
  expect(targetNode).toHaveClass(addedClassName);
});

test(`문서의 #app 노드에 'anything' 클래스 이름 설정이 가능하다.`, () => {
  // DOM 테스트 하고 싶다
  // Jest가 돌아가는 Node.js 환경은 웹 브라우저가 아니다.
  document.body.innerHTML = /* html */ `
  <div id="app"></div>
  `;
  const appNode = document.getElementById('app');
  let addedClassName = 'anything';

  addClass(appNode, addedClassName);
  expect(appNode).toHaveClass(addedClassName);
});
