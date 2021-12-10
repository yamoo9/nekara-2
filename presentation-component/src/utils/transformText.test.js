import { transformText } from './transformText';

test('transformText 유틸리티', () => {
  expect(
    transformText(`
    Jest is Test Runner 
  `)
  ).toBe('Jest is Test Runner');
});
