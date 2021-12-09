import './GlobalNav.css';
import React from 'react';

export default function GlobalNav({ children }) {
  return <nav className="globalNavigation">{children}</nav>;
}
