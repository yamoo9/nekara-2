import { Counter } from 'components';
import styled from 'styled-components/macro';

// Styled 컴포넌트
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}
