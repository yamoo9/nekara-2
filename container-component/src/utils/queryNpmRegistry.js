export function queryNpmRegistry({ query, size = 5 } = {}) {
  return fetch(`//registry.npmjs.org/-/v1/search?text=${query}&size=${size}`);
}
