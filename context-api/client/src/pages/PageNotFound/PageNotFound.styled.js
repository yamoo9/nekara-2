import styled, { css } from 'styled-components/macro';
import { lg, getGrayColor } from 'styles/utils';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: clamp(480px, 50vw, 640px);
  transform: translate(-50%, -50%);
`;

export const Figure = styled.figure`
  margin: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Caption = styled.figcaption`
  color: ${getGrayColor(400)};
  transform: translate(80px, -70px);

  ${lg(css`
    font-size: 1.4rem;
    transform: translate(80px, -100px);
  `)}
`;
