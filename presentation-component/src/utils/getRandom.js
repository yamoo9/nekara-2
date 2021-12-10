export const getRandom = (n) => Math.random() * n;
export const getRandomMinMax = (min = 0, max = 10) =>
  Math.floor(getRandom(max - min) + min);