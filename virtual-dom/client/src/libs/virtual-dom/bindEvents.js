import { extractEventType, isEventProp } from './props.js';

export function bindEvents(node, props) {
  Object.keys(props).forEach((prop) => {
    if (isEventProp(prop)) {
      node.addEventListener(extractEventType(prop), props[prop]);
    }
  });
}
