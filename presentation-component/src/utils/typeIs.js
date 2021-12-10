export const typeIs = (d) =>
  Object.prototype.toString.call(d).toLowerCase().slice(8, -1);

export const isObject = (d) => typeIs(d) === 'object';
