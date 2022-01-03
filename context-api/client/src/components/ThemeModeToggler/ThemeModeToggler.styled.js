import { getPrimaryColor } from 'styles/utils';

const styled = require('styled-components/macro');

export const Button = styled.button`
  margin-left: 2px;
  border: 0;
  padding: 0.4em 0.55em;
  background: transparent;
  line-height: 1;
  font-size: 1.4rem;
  color: ${getPrimaryColor(300)};
`;
