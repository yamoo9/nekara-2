export function diff(newVNode, oldVNode) {
  return (
    typeof newVNode !== typeof oldVNode ||
    (typeof newVNode === 'string' && newVNode !== oldVNode) ||
    newVNode.type !== oldVNode.type ||
    newVNode.props.forceUpdate
  );
}
