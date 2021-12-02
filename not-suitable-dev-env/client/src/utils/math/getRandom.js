export const getRandom = (n = 1) => Math.random() * n;

export const getRandomMinMax = (min = 0, max = 10) => {
  return Math.floor(getRandom(max - min) + min);
};
