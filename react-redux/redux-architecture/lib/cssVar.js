// 루트 요소
const rootNode = document.documentElement;

// 글로벌 css 변수 가져오기
function getCssVar(varName) {
  return window.getComputedStyle(rootNode, null).getPropertyValue(varName);
}
// 글로벌 css 변수 설정하기
function setCssVar(varName, value) {
  rootNode.style.setProperty(varName, value);
}

// 가져오거나, 설정하는 유틸리티 내보내기
export const cssVar = (varName, value) => {
  if (!value) {
    return getCssVar(varName);
  } else {
    setCssVar(varName, value);
  }
};
