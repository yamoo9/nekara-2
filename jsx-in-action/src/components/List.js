import React from 'react';

export default function List(props) {
  return <ul>{props.children}</ul>;
}

// Compound Component Pattern
// React Component has `displayName` prop
// Define Component Name
// List.Item.displayName = 'Item';
List.Item = function ListItem(props) {
  return (
    <li>
      <a href={props.link}>{props.text}</a>
    </li>
  );
};
