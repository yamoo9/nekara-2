const styled = require('styled-components/macro');

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  background: rgba(200 200 200 / 10%);
  margin-bottom: 4px;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 0.875rem;
`;

export const Input = styled.input`
  padding: 0.3em 0.6em;
  font-size: 1rem;
  border-bottom: 2px solid currentColor;
`;
