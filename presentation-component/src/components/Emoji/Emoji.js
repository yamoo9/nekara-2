import React from 'react';

export function Emoji({ source, label, className }) {
  return (
    <figure className={`emoji ${className}`.trim()} data-testid="wrapper">
      <img src={source} alt={label} title={label} />
    </figure>
  );
}

Emoji.defaultProps = {
  className: '',
};
