export function describe(testLabel, callback, collasped = false) {
  console[collasped ? 'groupCollapsed' : 'group'](testLabel);
  callback();
  console.groupEnd();
}
