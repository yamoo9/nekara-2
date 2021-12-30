import { Header } from 'components';
import { Container, Wrapper } from './Layout.styled';

export function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Wrapper as="main">{children}</Wrapper>
    </Container>
  );
}
