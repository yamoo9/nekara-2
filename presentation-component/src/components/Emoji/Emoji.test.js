import React from 'react';
import { render } from '@testing-library/react';
import { Emoji } from './Emoji';

describe('Emoji 컴포넌트', () => {
  test('래퍼 요소는 figure이고, 내부에는 img 요소가 포함되어 있다.', () => {
    const { debug, getByTestId } = render(<Emoji />);
    const wrapperNode = getByTestId('wrapper');
    const imageNode = wrapperNode.querySelector('img');
    expect(wrapperNode.nodeName.toLowerCase()).toBe('figure');
    expect(wrapperNode).toContainElement(imageNode);
    debug();
  });

  // test('figure 요소는 "emoji" 클래스 이름을 포함한다.', () => {

  // });
});
