export function setProp(node, prop, value) {
  if (isCustomProp(prop)) {
    return;
  } else if (prop === 'className') {
    node.setAttribute('class', value);
  } else if (typeof value === 'boolean') {
    setBooleanProp(node, prop, value);
  } else {
    node.setAttribute(prop, value);
  }
}

export function setProps(node, props) {
  Object.keys(props).forEach((prop) => {
    setProp(node, prop, props[prop]);
  });
}

export function setBooleanProp(node, prop, value) {
  if (value) {
    node.setAttribute(prop, value);
    node[prop] = true;
  } else {
    node[prop] = false;
  }
}

export function removeBooleanProp(node, prop) {
  node.removeAttribute(prop);
  node[prop] = false;
}

export function removeProp(node, prop) {
  if (isCustomProp(prop)) {
    return;
  }
  if (typeof prop === 'boolean') {
    return removeBooleanProp(node, prop);
  }
  if (prop === 'className') {
    prop = 'class';
  }
  node.removeAttribute(prop);
}

export function updateProp(node, prop, newVal, oldVal) {
  if (!newVal) {
    removeProp(node, prop, oldVal);
  } else if (!oldVal || newVal !== oldVal) {
    setProp(node, prop, newVal);
  }
}

export function updateProps(node, newProps, oldProps = {}) {
  const props = Object.assign({}, newProps, oldProps);
  Object.keys(props).forEach((prop) => {
    updateProp(node, prop, newProps[prop], oldProps[prop]);
  });
}

export function isEventProp(prop) {
  return /^on/.test(prop);
}

export function extractEventType(prop) {
  return prop.slice(2).toLowerCase();
}

export function isCustomProp(prop) {
  return isEventProp(prop) || prop === 'forceUpdate';
}
