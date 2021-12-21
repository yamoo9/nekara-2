const focusableElementSelector =
  'a[href], area[href], button, input, select, textarea, iframe, summary, details, video[controls], audio[controls], [contenteditable=""], [contenteditable="true"], [tabindex]:not([tabindex^="-"])';

export const isFocusable = (elementNode) => {
  const current = document.activeElement;
  if (current === elementNode) return true;

  const protectEvent = (e) => e.stopImmediatePropagation();
  elementNode.addEventListener('focus', protectEvent, true);
  elementNode.addEventListener('blur', protectEvent, true);
  elementNode.focus({ preventScroll: true });

  const result = document.activeElement === elementNode;
  elementNode.blur();

  if (current) current.focus({ preventScroll: true });
  elementNode.removeEventListener('focus', protectEvent, true);
  elementNode.removeEventListener('blur', protectEvent, true);

  return result;
};

export const getFocusableChildren = (node) => {
  const children = Array.from(node.querySelectorAll(focusableElementSelector)); // NodeList → Array
  return children.filter((child) => isFocusable(child));
};
