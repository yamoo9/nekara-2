import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { getPrimaryColor, getGrayColor, hex2rgba, px2rem } from 'styles/utils';

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

const LinkWrapper = forwardRef(
  (
    { activeClassName = 'active', activeStyle, className, style, ...restProps },
    ref
  ) => {
    return (
      <NavLink
        ref={ref}
        className={({ isActive }) =>
          [className, isActive ? activeClassName : null]
            .filter(Boolean)
            .join(' ')
        }
        style={({ isActive }) => ({
          ...style,
          ...(isActive ? activeStyle : null),
        })}
        {...restProps}
      />
    );
  }
);

export const Link = styled(LinkWrapper)`
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

  &.${({ activeClassName }) => (activeClassName ? activeClassName : 'active')} {
    color: ${primaryActive};
    background: ${hex2rgba(primaryActive, '10%')};
  }
`;

export const SignOut = styled.button`
  width: clamp(1rem, 20vw, 5rem);
  border: 0;
  border-radius: 4px;
  padding: 0.6em 0.1em;
  font-weight: 700;
  font-size: ${px2rem(16)};
  line-height: 1.5;
  color: ${getGrayColor(500)};
  background: ${hex2rgba(getGrayColor(100), 0.2)};

  &:hover {
    color: ${primaryHover};
    background: ${hex2rgba(primaryHover, 0.05)};
  }
`;
