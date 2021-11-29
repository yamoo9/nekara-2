export const addClass = (node, ...classNames) => {
  // 로직 작성
  // 문서 요소 노드에 접근/조작

  if (node && 'classList' in node) {
    node.classList.add(...classNames);
  }

  return node;
};
