// 테스트 할 React 컴포넌트 로드
import React from 'react';
import { render } from '@testing-library/react';
import { RandomCountUp } from './RandomCountUp';

// 컴포넌트 props
let count = 101;
let isComplete = true;

describe('RandomCountUp 컴포넌트', () => {
  test('RandomCountUp 컴포넌트의 container 요소가 문서에 존재합니다.', () => {
    // 컴포넌트 render
    const { getByTestId } = render(
      <RandomCountUp count={count} isComplete={isComplete} />
    );

    // 테스트
    expect(getByTestId('container')).toBeInTheDocument();
  });

  test(`RandomCountUp 컴포넌트가 출력하는 카운트 값은 ${count}입니다.`, () => {
    // 컴포넌트 render
    const { getByText } = render(
      <RandomCountUp count={count} isComplete={true} />
    );

    const countNode = getByText(count);

    // 테스트
    expect(countNode).toHaveTextContent(count.toString());
    expect(countNode).toHaveStyle('animation-name: none');
  });
});
