import { isElementNode, throwError } from '../../utils/index.js';

function setStyle(node, styleName, value) {
  if (isElementNode(node)) {
    // node.style.color, node.style.backgroundColor
    // node.style['color'], node.style['backgroundColor']
    node.style[styleName] = value;
  } else {
    throwError('...');
  }
}

function getStyle(node, styleName, pseudoElement = null) {
  if (isElementNode(node)) {
    // return node.style[styleName];
    return window.getComputedStyle(node, pseudoElement)[styleName];
  } else {
    throwError('...');
  }
}

export function css(node, styleName, value, pseudoElement = null) {
  return !value
    ? getStyle(node, styleName, pseudoElement)
    : setStyle(node, styleName, value);
}
