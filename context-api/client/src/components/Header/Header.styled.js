import { Link } from 'react-router-dom';
import { px2rem, getColor, hex2rgba } from 'styles/utils';
import { Wrapper as GlobalWrapper } from 'styles/common.styled';
const styled = require('styled-components/macro');

export const Container = styled.header`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  background: ${hex2rgba(getColor('white'), 0.7)};
  box-shadow: 0 4px 10px rgba(0 0 0 / 10%);
  backdrop-filter: ${({ blur }) => blur && 'blur(2px)'};
`;

export const Wrapper = styled(GlobalWrapper)`
  justify-content: space-between;
  align-items: center;
  min-height: ${px2rem(75)};
`;

const size = 30;
export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size}px;
  height: ${size}px;
  border-radius: 4px;
  padding: 2px;

  &:hover {
    background: rgba(10 45 10 / 10%);
  }
`;
