// hyperscript.js
// h.js

export function h(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}
