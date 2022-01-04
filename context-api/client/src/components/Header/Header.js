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
    {
      text: '홈',
      to: '/',
      isAuthRequired: false,
      alwaysDisplay: true,
    },
    {
      text: '인증',
      to: '/authorized',
      isAuthRequired: true,
    },
    {
      text: '테마 데모',
      to: '/sc-theme-demo',
      isAuthRequired: false,
      alwaysDisplay: true,
    },
    {
      text: '로그인',
      to: '/signin',
      isAuthRequired: false,
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
