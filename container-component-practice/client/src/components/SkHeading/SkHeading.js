// module css
import styles from './SkHeading.module.css';
import { string } from 'prop-types';
import { classNames } from 'utils';

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
  className: string,
  as: string.isRequired,
  children: string.isRequired,
};

export default SkHeading;
