export function camelCase(data) {
  return data
    .toString()
    .replace(/\s+\w/g, (match) => match.toUpperCase().trim());
}
