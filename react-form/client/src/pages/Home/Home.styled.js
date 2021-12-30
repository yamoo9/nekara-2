import { getGrayColor, px2rem } from 'styles/utils';
const styled = require('styled-components/macro');

export const Headline = styled.h2`
  margin-top: ${px2rem(38)};
  color: ${getGrayColor(500)};
`;
