import { useState } from 'react';
import { Container, Wrapper, HomeLink } from './Header.styled';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Navigation } from 'components';

export function Header() {
  const [logoLabel] = useState('React Leaf Form');
  const [navigationItems] = useState([
    {
      text: '홈',
      to: '/',
    },
    {
      text: '로그인',
      to: '/signin',
    },
  ]);

  return (
    <Container>
      <Wrapper flex>
        <HomeLink to="/">
          <Logo title={logoLabel} />
        </HomeLink>
        <Navigation items={navigationItems} />
      </Wrapper>
    </Container>
  );
}
