import React from 'react';
import { render } from '@testing-library/react';
import { Emoji } from './Emoji';

let imageNode = null;
let wrapperNode = null;
let props = {};

beforeAll(() => {
  props.source = '/assets/emoji/oops.png';
  props.label = '웁스!!';

  const { getByTestId } = render(<Emoji {...props} />);

  wrapperNode = getByTestId('wrapper');
  imageNode = wrapperNode.querySelector('img');
});

describe('Emoji 컴포넌트', () => {
  test('figure, img 요소 모두 화면에 표시되어 한다.', () => {
    expect(wrapperNode).toBeInTheDocument();
    expect(imageNode).toBeVisible();
  });

  test('래퍼 요소는 figure이고, 내부에는 img 요소가 포함되어 있다.', () => {
    expect(wrapperNode.nodeName.toLowerCase()).toBe('figure');
    expect(wrapperNode).toContainElement(imageNode);
  });

  test('figure 요소는 "emoji" 클래스 이름을 포함한다.', () => {
    expect(wrapperNode).toHaveClass('emoji');
  });

  test(`img 요소는 src, alt 속성 값을 가지며, 
    src 속성 값은 "/assets/emoji/oops.png" 입니다.`, () => {
    expect(imageNode).toHaveAttribute('src', props.source);
    expect(imageNode).toHaveAttribute('alt', props.label);
  });

  test('img 요소의 alt, title 값은 동일해야 한다.', () => {
    expect(imageNode.getAttribute('alt')).toBe(imageNode.getAttribute('title'));
  });

  test('컴포넌트에 "alpha beta gamma zeta" 클래스 prop을 설정하면 모두 반영된다.', () => {
    let classNames = 'alpha beta gamma zeta';
    const { getByTestId } = render(<Emoji className={classNames} {...props} />);
    const figureNode = getByTestId('wrapper');
    expect(figureNode.className).toBe(`emoji ${classNames}`);
  });

  test('컴포넌트에 "" 클래스 prop을 설정하면 "emoji"이다.', () => {
    let classNames = '';
    const { getByTestId } = render(<Emoji className={classNames} {...props} />);
    const figureNode = getByTestId('wrapper');
    expect(figureNode.className).toBe('emoji');
  });
});
