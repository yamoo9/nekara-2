import { render } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner 컴포넌트', () => {
  test(`컴포넌트의 루트 요소는 figure이다.`, () => {
    const { getByTestId } = render(<Banner />);
    const bannerElement = getByTestId('banner');
    expect(bannerElement.localName).toBe('figure');
  });

  test(`루트 요소는 as="div" prop 설정으로 <div> 요소로 변경된다.`, () => {
    const { getByTestId } = render(<Banner as="div" />);
    expect(getByTestId('banner').localName).toBe('div');
  });

  test(`루트 요소는 'id' prop을 전달 받아 루트 요소에 id 속성을 설정한다.`, () => {
    const { getByTestId } = render(<Banner id="identity" />);
    expect(getByTestId('banner')).toHaveAttribute('id');
  });

  test(`루트 요소는 클래스 이름 "banner"를 포함한다.`, () => {
    const { getByTestId } = render(<Banner />);
    expect(getByTestId('banner')).toHaveClass('banner');
  });

  test(`루트 요소는 사용자가 추가한 클래스 이름을 포함한다.`, () => {
    const { getByTestId } = render(<Banner className="a b" />);
    expect(getByTestId('banner')).toHaveClass('a', 'b');
  });

  test(`루트 요소는 사용자가 추가한 인라인 스타일을 포함한다.`, () => {
    const customStyle = { border: '3px solid currentColor' };
    const { getByTestId } = render(<Banner style={customStyle} />);
    expect(getByTestId('banner')).toHaveStyle(customStyle);
  });

  test(`루트 요소가 포함하는 자식 요소는 화면에 표시되지 않지만, 스크린 리더에서는 읽힌다.`, () => {
    const { getByTestId } = render(<Banner children="감춰주세요." />);
    expect(getByTestId('banner').firstElementChild).toHaveClass('a11yHidden');
  });
});
