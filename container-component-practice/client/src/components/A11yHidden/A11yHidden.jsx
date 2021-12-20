import './A11yHidden.css';
import { forwardRef } from 'react';
import { classNames } from 'utils';

export const A11yHidden = forwardRef(function A11yHidden(
  { as: Comp, className, focusable, children, ...restProps },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={classNames('a11yHidden', className, { focusable })}
      {...restProps}
    >
      {children}
    </Comp>
  );
});

A11yHidden.defaultProps = {
  as: 'span',
};
