import { css } from 'styled-components/macro';
import { viewport, colors } from './theme';

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
  if (/white|black/.test(type)) {
    return colors[type];
  }

  const colorType = colors[type];

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
export const getSecondaryColor = (step) => getColor('secondary', step);
export const getErrorColor = (step) => getColor('error', step);
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

/* 미디어 쿼리 ------------------------------------------------------------------- */

export const mq = (breakpoint, cssCode) => {
  let query = viewport[breakpoint];
  let queries = Object.keys(viewport)
    .filter((keyword) => !/min|max/.test(keyword))
    .join(' | ');

  if (!query) {
    console.error(
      `[경고]
  viewport 객체는 "${breakpoint}" 중단점 키워드를 지원하지 않습니다.
  지원하는 쿼리는 ${queries} 입니다.
      `
    );
  }

  return css`
    @media (min-width: ${px2em(viewport[breakpoint])}) {
      ${cssCode}
    }
  `;
};

export const xs = (cssCode) => mq('xs', cssCode);
export const sm = (cssCode) => mq('sm', cssCode);
export const md = (cssCode) => mq('md', cssCode);
export const lg = (cssCode) => mq('lg', cssCode);
export const xl = (cssCode) => mq('xl', cssCode);
