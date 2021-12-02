import { isElementNode, throwError } from '../../utils/index.js';

export function addClass(node, ...classNames) {
  if (isElementNode(node)) {
    node.classList.add(...classNames);
  } else {
    throwError('...');
  }
}

export function removeClass(node, ...classNames) {
  if (isElementNode(node)) {
    if (classNames.length === 0) {
      node.removeAttribute('class');
    } else {
      // 그렇지 않으면
      node.classList.remove(...classNames);
    }
  } else {
    throwError('...');
  }
}

export function hasClass(node, className) {
  if (isElementNode(node)) {
    return node.classList.contains(className);
  } else {
    throwError('...');
  }
}

export function toggleClass(node, className) {
  if (isElementNode(node)) {
    hasClass(node, className)
      ? removeClass(node, className)
      : addClass(node, className);
  } else {
    throwError('...');
  }
}
