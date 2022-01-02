import { Wrapper as GlobalWrapper } from 'styles/common.styled';
const styled = require('styled-components/macro');

export const Container = styled.div`
  min-height: 100vh;
`;

export const Wrapper = styled(GlobalWrapper)`
  flex-flow: ${({ flex }) => flex && 'column'};
`;
