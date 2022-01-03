import { useState, forwardRef } from 'react';
import { bool, object } from 'prop-types';

import { Container, Wrapper, HomeLink } from './Header.styled';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Navigation } from 'components';

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

export const Header = forwardRef(function Header({ theme, blur }, ref) {
  const [logoLabel] = useState('React Leaf Form');
  const [navigationItems] = useState([
    // {
    //   text: '홈',
    //   to: '/',
    // },
    {
      text: '인증',
      to: '/authorized',
    },
    {
      text: '로그인',
      to: '/signin',
    },
  ]);

  return (
    <Container ref={ref} theme={theme} blur={blur}>
      <Wrapper flex>
        <HomeLink to="/">
          <Logo title={logoLabel} />
        </HomeLink>
        <Navigation items={navigationItems} />
      </Wrapper>
    </Container>
  );
});

Header.propTypes = {
  theme: object,
  blur: bool,
};
