import { classNames } from './classNames';

describe('classNames 유틸리티', () => {
  test(`classNames('a', 'b', 'c')  →  'a b c' 이다.`, () => {
    expect(classNames('a', 'b', 'c')).toBe('a b c');
  });

  test(`classNames('a', { 'b': true, 'c': false }, 'd')  →  'a b d' 이다.`, () => {
    expect(classNames('a', { b: true, c: false }, 'd')).toBe('a b d');
  });

  test(`classNames({ a: true, b: false, c: true })  →  'a c' 이다.`, () => {
    expect(classNames({ a: true, b: false, c: true })).toBe('a c');
  });
});
