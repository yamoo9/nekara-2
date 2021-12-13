import { isObject } from './typeIs';

export const classNames = (...classNames) => {
  return classNames
    .map((className) => {
      if (isObject(className)) {
        const valueIsTrueList = Object.entries(className).filter(
          ([, value]) => value
        ); // [['b', true]]
        return Object.keys(Object.fromEntries(valueIsTrueList)).join(' ');
      }
      return className;
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
};
