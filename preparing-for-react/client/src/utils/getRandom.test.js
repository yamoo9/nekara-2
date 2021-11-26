import { test, expect } from './tests.js';
import { getRandom, getRandomCount } from './getRandom.js';

test('getRandom(10) 실행 결과는 10보다 작다.', () => {
  let targetCount = getRandom(10);
  console.log(`getRandom(10) = ${targetCount}`);
  expect(targetCount > 10).toBe(false);
});

test('getRandomCount(5, 7) 실행 결과는 5 이상 7 이하이다.', () => {
  let min = 5,
    max = 7;
  let minmaxValue = getRandomCount(min, max);
  console.log(`getRandom(min, max) = ${minmaxValue}`);
  expect(minmaxValue >= min).toBe(true);
  expect(minmaxValue <= max).toBe(true);
});
