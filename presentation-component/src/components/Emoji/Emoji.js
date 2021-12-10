import React from 'react';
import { classNames } from '../../utils';

export function Emoji({ source, label, className, ...restProps }) {
  return (
    <figure
      className={classNames('emoji', className)}
      data-testid="wrapper"
      {...restProps}
    >
      <img src={source} alt={label} title={label} />
    </figure>
  );
}

Emoji.defaultProps = {
  className: '',
};
