export function createElement(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const elementNode = document.createElement(vNode.type);

  // vNode.props

  // vNode.children 순환 (createElement 재귀 호출)
  vNode.children
    // .map((vChild) => createElement(vChild))
    .map(createElement)
    // .forEach((childNode) => elementNode.appendChild(childNode));
    .forEach(elementNode.appendChild.bind(elementNode));

  return elementNode;
}

// 새.날다()
// (다른 객체의) 메서드를 빌려쓴다. 패턴
// 새.날다.call(호랑이)

// 특정 시점에 실행 (이벤트, 콜백 함수)

// 새.날다.bind(새)
// 배열.forEach(콜백함수)
// [요소,텍스트,...].forEach(콜백함수)
// [요소,텍스트,...].forEach(node => 부모.appendChild(node))
// [요소,텍스트,...].forEach(부모.appendChild.bind(부모))
