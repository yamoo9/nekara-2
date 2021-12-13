import './A11yHidden.css';
import React from 'react';
import { classNames } from '../../utils';

export function A11yHidden({
  as: ComponentName,
  className,
  focusable,
  ...restProps
}) {
  return (
    <ComponentName
      className={classNames('a11yHidden', { focusable }, className)}
      {...restProps}
    />
  );
}

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
  focusable: false,
};
