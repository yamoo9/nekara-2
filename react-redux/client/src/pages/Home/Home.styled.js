import { getPrimaryColor, px2rem, md } from 'styles/utils';

const styled = require('styled-components/macro');
const { css } = require('styled-components/macro');

export const Figure = styled.figure`
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${md(css`
    flex-flow: row;
  `)}
`;

export const Cover = styled.img`
  width: auto;
  height: clamp(300px, 50vh, 400px);
`;

export const Caption = styled.figcaption`
  margin-top: 30px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  font-size: ${px2rem(32)};
  color: ${getPrimaryColor(300)};

  ${md(css`
    width: ${px2rem(240)};
    font-size: ${px2rem(56)};
    transform: translate(30px, 10px);
  `)}
`;
