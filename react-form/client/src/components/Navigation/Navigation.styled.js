import { NavLink } from 'react-router-dom';
import { getPrimaryColor, getGrayColor, hex2rgba } from 'styles/utils';

const styled = require('styled-components/macro');

export const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  margin: 0 0.05em;
`;

const primaryHover = getPrimaryColor(300);
const primaryActive = getPrimaryColor(400);
// export let activeClassName = 'is-active';

export const Link = styled(NavLink)`
  display: block;
  padding: 0.6em 0.1em;
  width: clamp(1rem, 20vw, 5rem);
  color: ${getGrayColor(500)};
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;

  &:hover {
    color: ${primaryHover};
    background: ${hex2rgba(primaryHover, 0.05)};
  }

  &.active {
    color: ${primaryActive};
    background: ${hex2rgba(primaryActive, '10%')};
  }
`;
