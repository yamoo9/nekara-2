import { setProps } from './props.js';
import { bindEvents } from './bindEvents.js';

export function createElement(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const elementNode = document.createElement(vNode.type);

  setProps(elementNode, vNode.props);
  bindEvents(elementNode, vNode.props);

  vNode.children
    .map(createElement)
    .forEach(elementNode.appendChild.bind(elementNode));

  return elementNode;
}
