function getRandomHexColorValue() {
  let colorValue = Math.ceil(Math.random() * 255).toString(16);
  return colorValue.length === 1 ? `0${colorValue}` : colorValue;
}

export function getRandomColor(useRGBMode = false) {
  let red = getRandomHexColorValue();
  let green = getRandomHexColorValue();
  let blue = getRandomHexColorValue();
  return !useRGBMode
    ? `#${red}${green}${blue}`
    : `rgb(${red},${green},${blue})`;
}
