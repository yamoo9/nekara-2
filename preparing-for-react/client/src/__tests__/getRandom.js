import { getRandom, getRandomCount } from '../utils/getRandom.js';

test('getRandom(10) 실행 결과는 10보다 작다.', () => {
  expect(getRandom(10)).toBeLessThan(10);
});

test('getRandomCount(5, 7) 실행 결과는 5 이상 7 이하이다.', () => {
  let min = 5;
  let max = 7;
  let minmaxValue = getRandomCount(min, max);

  expect(minmaxValue).toBeGreaterThanOrEqual(min);
  expect(minmaxValue).toBeLessThanOrEqual(max);
});
