export function queryNpmRegistry({ query, size = 5 } = {}) {
  return fetch(`/-/v1/search?text=${query}&size=${size}`);
}
