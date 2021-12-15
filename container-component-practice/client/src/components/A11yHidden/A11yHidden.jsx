import './A11yHidden.css';
import { classNames } from 'utils';

export function A11yHidden({
  as: Comp,
  className,
  focusable,
  children,
  ...restProps
}) {
  return (
    <Comp
      className={classNames('a11yHidden', className, { focusable })}
      {...restProps}
    >
      {children}
    </Comp>
  );
}

A11yHidden.defaultProps = {
  as: 'span',
};
