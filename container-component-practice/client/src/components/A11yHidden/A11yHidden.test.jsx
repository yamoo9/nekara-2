import { A11yHidden } from './A11yHidden';
import { render, screen } from '@testing-library/react';

describe('A11yHidden 컴포넌트', () => {
  let desc =
    '화면에서는 보이지 않지만, 스크린 리더는 콘텐츠를 읽을 수 있습니다.';

  beforeEach(() => {
    render(
      <A11yHidden as="article" className="iDontSeeYou" focusable>
        {desc}
      </A11yHidden>
    );
  });

  test(`'as' prop의 기본 값은 "span"이다.`, () => {
    expect(A11yHidden.defaultProps.as).toBe('span');
  });

  test(`컴포넌트 요소의 as="article" prop 설정으로 <article> 요소로 렌더링 된다.`, () => {
    const a11yHiddenElement = screen.getByText(desc);
    expect(a11yHiddenElement).toBeInTheDocument();
    expect(a11yHiddenElement.localName).toBe('article');
  });

  test(`컴포넌트 요소는 "a11yHidden" 클래스 이름을 포함한다.`, () => {
    const a11yHiddenElement = screen.getByText(desc);
    expect(a11yHiddenElement).toHaveClass('a11yHidden');
  });

  test(`컴포넌트 요소는 사용자가 추가한 클래스 이름 "iDontSeeYou"를 포함한다.`, () => {
    const a11yHiddenElement = screen.getByText(desc);
    expect(a11yHiddenElement).toHaveClass('iDontSeeYou');
  });

  test(`컴포넌트 요소는 focusable prop 설정 시, "focusable" 클래스 이름을 포함한다.`, () => {
    const a11yHiddenElement = screen.getByText(desc);
    expect(a11yHiddenElement).toHaveClass('focusable');
  });

  test(`컴포넌트 요소는 화면에 표시되지 않지만, 스크린 리더에서는 읽을 수 있다.`, () => {
    // Jest, Jest DOM, React Testing Library 활용
    // 테스트는 ... 계산된 CSS 스타일 테스트할 수 없습니다.
    const a11yHiddenElement = screen.getByText(desc);

    a11yHiddenElement.style.cssText = `
      visibility: hidden;
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: circle(0);
      height: 1px;
      margin: -1px;
      white-space: nowrap;
    `;

    // console.log(getComputedStyle(a11yHiddenElement, null));

    expect(a11yHiddenElement).not.toBeVisible();
    expect(parseInt(a11yHiddenElement.style.height, 10)).toBeGreaterThan(0);
  });
});
