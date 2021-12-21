// module css
import styles from './SkHeading.module.css';

import React from 'react';
import { classNames, PropTypes } from 'utils';

/* -------------------------------------------------------------------------- */

const SkHeading = ({ as: Comp, className, children, ...restProps }) => {
  return (
    <Comp className={classNames(styles.headline, className)} {...restProps}>
      <span className={styles.SK}>SK</span>
      <span className={styles.title}>{children.toUpperCase()}</span>
    </Comp>
  );
};

// React 컴포넌트 필히 가지는 속성
// displayName
// defaultProps
// propTypes

SkHeading.defaultProps = {
  className: '',
};

SkHeading.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

// if (!children || typeof children !== 'string') {
//   throw new Error(
//     'SkHeading 컴포넌트의 `children` prop은 필수이며 문자 타입만 허용합니다.'
//   );
// }

export default SkHeading;
