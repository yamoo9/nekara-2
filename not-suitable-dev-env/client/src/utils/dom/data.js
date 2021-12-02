import { attr } from '../../utils/index.js';

export function data(node, dataName, value) {
  return attr(node, `data-${dataName}`, value);
}
