/* eslint-disable react/prop-types */
import './A11yHidden.css';
import React from 'react';
import { classNames } from '../../utils';

export function A11yHidden({ as, className, focusable, ...restProps }) {
  return React.createElement(as, {
    className: classNames(
      'a11yHidden',
      {
        focusable: focusable,
      },
      className
    ),
    ...restProps,
  });
}

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
  focusable: false,
};
