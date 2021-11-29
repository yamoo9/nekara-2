// 모듈 파일 (스코프 캡슐화)
// 동적으로 문서에 추가할 노드를 생성/조작하는 코드 작성

/* 
<div class="contents" lang="en">
  <h1>Declarative programming</h1>
  <p>
    In computer science, declarative programming is a programming paradigm—a style of 
    building the structure and elements of computer programs—that expresses the logic of 
    a computation without describing its control flow. Many languages that apply this style 
    attempt to minimize or eliminate side effects by describing what the program must accomplish 
    in terms of the problem domain, rather than describe how to accomplish it as a sequence of 
    the programming language primitives (the how being left up to the language's implementation). 
    This is in contrast with imperative programming, which implements algorithms in explicit steps.
  </p>
</div>
*/

function bindProps(node, props) {
  if (props) {
    // props 객체 → props 배열 변경
    // prop 매개변수 → [key, value] 구조 분해 할당 활용
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        key = 'class';
      }
      node.setAttribute(key, value);
    });
  }
}

function createElement(type, props) {
  const node = document.createElement(type);
  bindProps(node, props);
  return node;
}

const contentsNode = createElement('div', {
  lang: 'en',
  className: 'contents',
});

console.log(contentsNode);

// const contentsNode = document.createElement('div');
// contentsNode.setAttribute('lang', 'en');
// contentsNode.className = 'contents';
// contentsNode.setAttribute('class', 'contents');
// contentsNode.classList.add('contents');

const appNode = document.getElementById('app2');
appNode.appendChild(contentsNode);
