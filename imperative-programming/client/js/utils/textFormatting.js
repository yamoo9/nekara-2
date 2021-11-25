export var textFormatting = function textFormatting(text) {
  return text.toString().replace(/\n\s+/g, '').trim();
};