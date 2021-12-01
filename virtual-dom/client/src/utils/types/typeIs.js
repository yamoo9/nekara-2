export const typeIs = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
export const isUndefined = (data) => typeIs(data) === 'undefined';
export const isNull = (data) => typeIs(data) === 'null';
export const isNothing = (data) => isUndefined(data) || isNull(data);
export const isString = (data) => typeIs(data) === 'string';
export const isNumber = (data) => typeIs(data) === 'number';
export const isBoolean = (data) => typeIs(data) === 'boolean';
export const isFunction = (data) => typeIs(data) === 'function';
export const isArray = (data) => typeIs(data) === 'array';
export const isObject = (data) => typeIs(data) === 'object';
export const isDate = (data) => typeIs(data) === 'date';
