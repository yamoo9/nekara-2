import { isNothing, throwError } from '../../utils/index.js';

export function hasProp(target, propName) {
  return propName in target;
}

export function isElementNode(node) {
  if (!isNothing(node) && hasProp(node, 'nodeType')) {
    if (node.nodeType === document.ELEMENT_NODE) {
      return true;
    } else {
      return false;
    }
  } else {
    throwError(
      `전달된 ${node}는 존재하지 않거나, nodeType 속성을 가지고 있지 않습니다.`
    );
  }
}
