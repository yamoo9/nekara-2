import './DescList.css';
import React from 'react';

export default function DescList({ children }) {
  return <dl className="descriptionList">{children}</dl>;
}
