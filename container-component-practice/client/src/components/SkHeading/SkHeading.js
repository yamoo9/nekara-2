// module css
import styles from './SkHeading.module.css';
import React from 'react';
import { useRef, useEffect } from 'react';
import { string, func } from 'prop-types';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

const SkHeading = ({
  as: Comp,
  className,
  onClick,
  children,
  ...restProps
}) => {
  // useRef 훅을 사용해 최초 전달된 props 중 onClick prop을 기억(memo)
  const compareRef = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current += 1;
    console.log('이펙트 함수 실행 횟수: ', countRef.current);

    const prevValue = compareRef.current;
    if (prevValue !== onClick) {
      console.log(
        '이전 onClick과 새롭게 전달된 onClick prop은 동일하지 않습니다.',
        prevValue,
        onClick
      );
    }
    if (prevValue === onClick) {
      console.log(
        '이전 onClick과 새롭게 전달된 onClick prop은 동일합니다.',
        prevValue,
        onClick
      );
    }
    // 방금 전달 받은 onClick prop을 메모
    // ※ current 값이 변경되어도 컴포넌트는 다시 렌더링 되지 않는다.
    compareRef.current = onClick;
  }, [onClick]);

  // 그리고 컴포넌트가 다시 렌더링 되었을 때, 새롭게 전달된 onClick prop이
  // useRef에 의해 이전에 기억된 값과 동일한지 검증해보자.

  return (
    <Comp
      className={classNames(styles.headline, className)}
      tabIndex={onClick && 0}
      onClick={onClick}
      {...restProps}
    >
      <span className={styles.SK}>SK</span>
      <span className={styles.title}>{children}</span>
    </Comp>
  );
};

SkHeading.defaultProps = {
  className: '',
};

SkHeading.propTypes = {
  className: string,
  as: string.isRequired,
  children: string.isRequired,
  onClick: func,
};

export default SkHeading;
