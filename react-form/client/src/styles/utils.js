import { color } from './theme';

/* 단위 ----------------------------------------------------------------------- */

const deunit = (unit) => parseInt(unit, 10);
const px2unit = (pxValue, base = 16) => deunit(pxValue) / base;

export const px2em = (pxValue, base) => `${px2unit(pxValue, base)}em`;

export const px2rem = (pxValue, base) => `${px2unit(pxValue, base)}rem`;

/* 컬러 ----------------------------------------------------------------------- */

const warnColor = (message) => {
  console.error(`%c${message}`, 'color: red; font-weight: 700');
};

export const getColor = (type, step) => {
  const colorType = color[type];

  if (!colorType) {
    warnColor(`${type} 컬러 타입이 존재하지 않습니다.`);
    return '';
  }

  let colorValue = colorType[step.toString()];

  if (!colorValue) {
    warnColor(`${type} 컬러 타입의 ${step} 스탭이 존재하지 않습니다.`);
    return '';
  }

  return colorValue;
};

export const getPrimaryColor = (step) => getColor('primary', step);

export const getGrayColor = (step) => getColor('gray', step);

/* 컬러 변환 -------------------------------------------------------------------- */

const hex2RgbValue = (hex) => {
  if (hex[0] === '#') hex = hex.slice(1);
  if (hex.length === 3) hex = hex.repeat(2);

  return {
    red: parseInt(hex[0] + hex[1], 16),
    green: parseInt(hex[2] + hex[3], 16),
    blue: parseInt(hex[4] + hex[5], 16),
  };
};

export const hex2rgb = (hex) => {
  const { red, green, blue } = hex2RgbValue(hex);
  return `rgb(${red}, ${green}, ${blue})`;
};

export const hex2rgba = (hex, alpha = '100%') => {
  if (!alpha.toString().includes('%')) alpha = `${alpha * 100}%`;
  const { red, green, blue } = hex2RgbValue(hex);
  return `rgba(${red} ${green} ${blue} / ${alpha})`;
};
