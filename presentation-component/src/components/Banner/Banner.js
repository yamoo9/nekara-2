/* eslint-disable no-unused-vars */
import './Banner.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { A11yHidden } from '../../components';

export function Banner({
  as: ComponentName,
  url,
  width,
  height,
  className,
  style,
  children,
  ...restProps
}) {
  const componentStyle = {
    width,
    height,
    background: `url(${url}) no-repeat left top / contain`,
    ...style,
  };

  return (
    <ComponentName
      className={classNames('banner', className)}
      style={componentStyle}
      {...restProps}
    >
      <A11yHidden>{children}</A11yHidden>
    </ComponentName>
  );
}

Banner.defaultProps = {
  as: 'figure',
  width: 187,
  height: 400,
};
