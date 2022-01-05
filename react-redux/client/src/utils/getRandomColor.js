const getRandomColorHex = () => {
  let value = Math.ceil(Math.random() * 255).toString(16);
  return value.length === 1 ? `0${value}` : value;
};

export const getRandomColor = () => {
  let red = getRandomColorHex();
  let green = getRandomColorHex();
  let blue = getRandomColorHex();
  return `#${red}${green}${blue}`;
};
