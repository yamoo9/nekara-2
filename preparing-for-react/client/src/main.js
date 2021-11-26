import './domTest/index.js';

const demo = '데몬스트레이션';
// demo = 'demo';
// demo = (a) => a * a;

const cssMap = {
  'background-color': '#222',
  color: '#eee',
  margin: '3rem',
  display: 'grid',
  'grid-template-rows': 'repeat(2, 1fr)',
};

const getNode = (selector) => document.querySelector(selector);

console.log(demo);
