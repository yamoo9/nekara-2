import { useState, forwardRef } from 'react';
import { Container, Wrapper, HomeLink } from './Header.styled';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Navigation } from 'components';

export const Header = forwardRef(function Header({ blur }, ref) {
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
    <Container ref={ref} blur={blur}>
      <Wrapper flex>
        <HomeLink to="/">
          <Logo title={logoLabel} />
        </HomeLink>
        <Navigation items={navigationItems} />
      </Wrapper>
    </Container>
  );
});
