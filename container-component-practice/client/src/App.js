import { useState, useMemo, useCallback } from 'react';
import { SkHeading } from 'components';

// const clickListener = () => console.log('clicked heading');

export default function App() {
  const [headlingLabel, setHeadingLabel] = useState('gateway');

  // 함수 컴포넌트 body 안에 정의한 함수는 다시 렌더링 될 때 새로운 함수로 정의된다.
  // 즉, prop으로 전달되는 함수가 이렇게 정의된 경우 늘 새로운 prop이 되어 불필요한 렌더링 문제를 야기한다.
  // const clickListener = () => console.log('clicked heading');

  // 함수 값을 기억(memo)
  // 최초 렌더링 시, 기억된 함수 값은 의존하는 상태가 변경되지 않았을 경우
  // 기억된 함수 값을 prop으로 전달하므로 불필요한 렌더링을 시도하지 않는다.

  // case 1. useMemo(() => 값(JS의 모든 값), [...state]);
  // let handleClick = useMemo(() => () => console.log('clicked heading'), []);

  // case 2. useCallback(함수값, [...state]);
  let handleClick = useCallback(() => console.log('clicked heading'), []);

  return (
    <>
      <button type="button" onClick={() => setHeadingLabel('highlight')}>
        change label
      </button>
      <SkHeading as="h3" onClick={handleClick}>
        {headlingLabel}
      </SkHeading>
      {/* <SkHeading as="h3">{headlingLabel}</SkHeading> */}
    </>
  );
}
