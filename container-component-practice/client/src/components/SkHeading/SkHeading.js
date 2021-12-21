// module css
import styles from './SkHeading.module.css';

import React from 'react';
import { classNames, PropTypes } from 'utils';

/* -------------------------------------------------------------------------- */

const SkHeading = ({ as: Comp, className, children, ...restProps }) => {
  return (
    <Comp className={classNames(styles.headline, className)} {...restProps}>
      <span className={styles.SK}>SK</span>
      <span className={styles.title}>{children}</span>
    </Comp>
  );
};

SkHeading.defaultProps = {
  className: '',
};

SkHeading.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default SkHeading;
