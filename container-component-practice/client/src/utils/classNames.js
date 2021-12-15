import { isObject } from './typeIs';

export function classNames(...classes) {
  return classes
    .map((className) => {
      if (isObject(className)) {
        const valueIsTruthy = Object.entries(className).filter(([key, value]) => value);
        return Object.keys(Object.fromEntries(valueIsTruthy)).join(' ');
      }
      return className;
    })
    .join(' ')
    .trim();
}