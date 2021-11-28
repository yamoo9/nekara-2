import { makeArray } from '../../utils/index.js';

export function getNodeList(selector, context = document) {
  return makeArray(context.querySelectorAll(selector));
}

export function getNode(selector, context = document) {
  return getNodeList(selector, context)[0];
}

// 별칭(alias) 함수
export const $$ = getNodeList;
export const $ = getNode;
