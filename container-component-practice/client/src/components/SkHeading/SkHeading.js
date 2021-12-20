// global css
// import './SkHeading.css';

// module css
// import styles from './SkHeading.module.css';
import styles from './SkHeading.module.css';

import React from 'react';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

const SkHeading = ({ as: Comp, className, children, ...restProps }) => {
  if (!children || typeof children !== 'string') {
    throw new Error(
      'SkHeading 컴포넌트의 `children` prop은 필수이며 문자 타입만 허용합니다.'
    );
  }

  return (
    <Comp className={classNames(styles.headline, className)} {...restProps}>
      <span className={styles.SK}>SK</span>
      <span className={styles.title}>{children.toUpperCase()}</span>
    </Comp>
  );
};

SkHeading.defaultProps = {
  as: 'h2',
  className: '',
};

export default SkHeading;
