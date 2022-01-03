import { Wrapper } from 'styles/common.styled';

const styled = require('styled-components/macro');

export const StyledWrapper = styled(Wrapper)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: 2rem 0;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 4px;
  padding: 2em;
  line-height: 1.5;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  & * {
    margin: 0;
  }
`;

export const Headline = styled.h2`
  margin-bottom: 0.45em;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid ${({ theme }) => theme.background};
  border-radius: 4px;
  padding: 0.6em 1em;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  font-size: 1rem;
  line-height: 1;
`;
