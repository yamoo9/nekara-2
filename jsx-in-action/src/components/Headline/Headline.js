import './Headline.css';
import React from 'react';

export default function Headline({ children }) {
  return <h1 className="headline">{children}</h1>;
}
