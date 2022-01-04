const getRandomColorHex = () => Math.ceil(Math.random() * 255).toString(16);

export const getRandomColor = () => {
  let red = getRandomColorHex();
  let green = getRandomColorHex();
  let blue = getRandomColorHex();
  return `#${red}${green}${blue}`;
};
