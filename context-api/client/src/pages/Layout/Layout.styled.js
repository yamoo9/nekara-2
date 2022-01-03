import { Wrapper as GlobalWrapper } from 'styles/common.styled';

const styled = require('styled-components/macro');
const { css } = require('styled-components/macro');

export const Container = styled.div`
  min-height: 100vh;
  ${({ theme }) =>
    theme &&
    css`
      background: ${theme.background};
      color: ${theme.color};
    `}
`;

export const Wrapper = styled(GlobalWrapper)`
  flex-flow: ${({ flex }) => flex && 'column'};
`;
