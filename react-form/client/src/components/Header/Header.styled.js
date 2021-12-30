import { Link } from 'react-router-dom';
import { px2rem } from 'styles/utils';
import { Wrapper as GlobalWrapper } from 'styles/common.styled';
const styled = require('styled-components/macro');

export const Container = styled.header`
  background: #fff;
  box-shadow: 0 4px 10px rgba(0 0 0 / 10%);
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
