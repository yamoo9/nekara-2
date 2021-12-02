/** @jsx h */

import { h } from './h.js';
import { createElement } from './createElement.js';

const vdomTree = (
  <div id="app" lang="en">
    <time className="timeline">showtime</time>
    <button
      type="button"
      onClick={(e) => {
        console.log(e.target);
      }}
      aria-label="click button"
    />
  </div>
);

// console.log(vdomTree);
const rootNode = createElement(vdomTree);

console.log(rootNode);
