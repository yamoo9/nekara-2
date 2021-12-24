import { memo } from 'react';
const styled = require('styled-components/macro');

// Styled 컴포넌트
// export const Container = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: ${({ flex }) => flex && 'flex'};
//   justify-content: ${({ flex }) => flex && 'center'};
//   align-items: ${({ flex }) => flex && 'center'};
// `;

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${({ flex }) =>
    flex &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const StyledOutput = styled.output`
  margin: 0 10px;
  font-size: 20px;
`;

let Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid currentColor;
  color: #343434;

  &:hover {
    background: #415162;
    color: #fff;
  }
`;

export const StyledButton = memo(Button);
