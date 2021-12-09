import React from 'react';

export const EmojiOops = ({
  src = 'https://bit.ly/347GB7Y',
  alt = '',
  ...restProps
}) => <img src={src} alt={alt} {...restProps} />;
