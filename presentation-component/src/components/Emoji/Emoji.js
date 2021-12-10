import React from 'react';

export function Emoji({ source, label }) {
  return (
    <figure className="emoji" data-testid="wrapper">
      <img src={source} alt={label} title={label} />
    </figure>
  );
}
