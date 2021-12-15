import Emoji from './Emoji';
import { render } from '@testing-library/react';

describe('Emoji 컴포넌트', () => {
  const props = {
    image: 'oops.png',
    label: '이봐!! 오류가 발생했다구!',
  };

  let container = null;
  let figure = null;
  let img = null;

  beforeEach(() => {
    const { container: wrapper } = render(<Emoji {...props} />);
    container = wrapper;
    figure = container.querySelector('figure');
    img = figure.children[0];
  });

  test('래퍼 요소는 figure이고, 내부에는 img 요소가 포함되어 있다.', () => {
    expect(figure).toBeInTheDocument();
    expect(img.localName).toBe('img');
  });

  test('figure 요소는 "emoji" 클래스 이름을 포함한다.', () => {
    expect(figure).toHaveClass('emoji');
  });

  test('img 요소는 src, alt 속성 값을 가지며, src 속성 값은 public 에셋(asset)이어야 한다.', () => {
    expect(img).toHaveAttribute(
      'src',
      `${process.env.PUBLIC_URL}/assets/${props.image}`
    );
    expect(img).toHaveAttribute('alt', props.label);
  });

  test('img 요소의 alt, title 값은 동일해야 한다.', () => {
    expect(img).toHaveAttribute('title', img.getAttribute('alt'));
  });

  test('figure, img 요소 모두 화면에 표시되어야 한다.', () => {
    expect(figure).toBeVisible();
    expect(img).toBeVisible();
  });
});
