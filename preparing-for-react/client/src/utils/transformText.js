export function snakeCase(data) {
  return data.toString().replace(/\s/g, '_');
}

export function kebabCase(data) {
  return data.toString().replace(/\s/g, '-');
}

export function camelCase(data) {
  return data
    .toString()
    .replace(/\s\w/g, (match) => match.toUpperCase().trim());
}

export function titleCase(data) {
  return data
    .toString()
    .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase().trim());
}
