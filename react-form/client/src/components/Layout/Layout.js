import { Header } from 'components';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './Layout.styled';

export function Layout() {
  return (
    <Container>
      <Header />
      <Wrapper as="main">
        <Outlet />
      </Wrapper>
    </Container>
  );
}
