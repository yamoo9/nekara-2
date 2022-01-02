import styled, { css } from 'styled-components/macro';
import { px2em, px2rem } from './utils';
import { viewport } from './theme';

/* -------------------------------------------------------------------------- */

export const flexMixin = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Wrapper = styled.div`
  ${({ flex }) => flex && flexMixin}
  width: clamp(${px2rem(viewport.min)}, 100vw, ${px2rem(viewport.max)});
  margin-left: auto;
  margin-right: auto;
  padding: 0 1em;

  @media (min-width: ${px2em(viewport.max)}) {
    padding: 0;
  }
`;

Wrapper.displayName = 'Wrapper';
