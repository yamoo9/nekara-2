export const transformText = (text) =>
  text.toString().replace(/\n\s+/g, '').trim();
