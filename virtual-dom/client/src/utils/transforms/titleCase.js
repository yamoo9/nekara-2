export function titleCase(data) {
  return data
    .toString()
    .replace(/(^\w|\s+\w)/g, (match) => match.toUpperCase().trim());
}
