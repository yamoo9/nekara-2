import { isElementNode, isString, throwError } from '../../utils/index.js';

function getAttr(node, attrName) {
  if (isElementNode(node)) {
    return node.getAttribute(attrName);
  } else {
    throwError('전달된 첫번째 인자는 HTML ElementNode가 아닙니다.');
  }
}

function setAttr(node, attrName, value) {
  if (isElementNode(node) && isString(attrName)) {
    node.setAttribute(attrName, value);
  } else {
    throwError(
      '전달된 첫번째 인자는 HTML ElementNode가 아니거나 또는 두번 인자인 attrName이 문자 값이 아닙니다.'
    );
  }
}

export function attr(node, attrName, value) {
  return !value ? getAttr(node, attrName) : setAttr(node, attrName, value);
}
