const typeIs = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

export const isArray = (data) => typeIs(data) === 'array';
export const isObject = (data) => typeIs(data) === 'object';
