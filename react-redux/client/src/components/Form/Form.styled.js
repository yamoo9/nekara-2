import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import {
  getColor,
  getErrorColor,
  getGrayColor,
  getPrimaryColor,
  hex2rgba,
  px2rem,
} from 'styles/utils';

const styled = require('styled-components/macro');
const { css } = require('styled-components/macro');

/* -------------------------------------------------------------------------- */
/* Container                                                                  */
/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

/* -------------------------------------------------------------------------- */
/* Headline                                                                   */
/* -------------------------------------------------------------------------- */

export const Headline = styled.h2`
  color: ${hex2rgba(getPrimaryColor(300), 0.8)};
`;

/* -------------------------------------------------------------------------- */
/* Form                                                                       */
/* -------------------------------------------------------------------------- */

export const Form = styled.form`
  border: 6px solid ${hex2rgba(getPrimaryColor(300), 0.35)};
  border-radius: 12px;
  padding: 2rem;
  background: ${getColor('white')};
`;

/* -------------------------------------------------------------------------- */
/* Control                                                                    */
/* -------------------------------------------------------------------------- */

export const Control = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4px;
  margin-bottom: 24px;
`;

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: ${px2rem(16)};
  font-weight: 700;
  color: ${getGrayColor(400)};
`;

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export const Input = styled.input`
  padding: 0.6em 0.6em;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid
    ${({ error, success }) => {
      if (error) return getErrorColor(300);
      if (success) return getPrimaryColor(200);
      return getGrayColor(200);
    }};

  &:focus {
    outline: none;
    border-bottom-color: ${({ error, success }) => {
      if (error) return getErrorColor(300);
      if (success) return getPrimaryColor(200);
      return getPrimaryColor(400);
    }};
  }
`;

/* -------------------------------------------------------------------------- */
/* Icon                                                                       */
/* -------------------------------------------------------------------------- */

const IconMixin = css`
  position: absolute;
  right: 4px;
  bottom: 22px;
  font-size: 1rem;
`;

export const IconSuccess = styled(AiFillCheckCircle)`
  ${IconMixin};
  color: ${getPrimaryColor(200)};
`;

export const IconError = styled(AiFillCloseCircle)`
  ${IconMixin};
  bottom: 42px;
  color: ${getErrorColor(300)};
`;

/* -------------------------------------------------------------------------- */
/* ErrorMessage                                                               */
/* -------------------------------------------------------------------------- */

let erorFontSize = 14;

export const ErrorMessage = styled.span`
  margin-top: 6px;
  padding-left: ${px2rem(erorFontSize / 2)};
  color: ${getErrorColor(300)};
  font-weight: 700;
  font-size: ${px2rem(erorFontSize)};
`;

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

export const Button = styled.button`
  margin: 0 4px 0 0;
  border: 4px solid ${hex2rgba(getPrimaryColor(300), 0.3)};
  border-radius: 6px;
  padding: 0.6em 1em;
  background: transparent;
  font-weight: 900;
  font-size: ${px2rem(16)};
  color: ${getPrimaryColor(300)};

  &:hover {
    background: ${hex2rgba(getPrimaryColor(300), 0.1)};
  }

  &:focus {
    outline: none;
    background: ${hex2rgba(getPrimaryColor(300), 0.15)};
  }

  ${({ callToAction }) =>
    callToAction &&
    css`
      background: ${hex2rgba(getPrimaryColor(300), 0.75)};
      color: ${getColor('white')};

      &:hover {
        background: ${hex2rgba(getPrimaryColor(300), 0.85)};
      }

      &:focus {
        outline: none;
        background: ${hex2rgba(getPrimaryColor(300), 1)};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${hex2rgba(getGrayColor(300), 0.3)};
      background: ${hex2rgba(getGrayColor(300), 0.3)};
      color: ${hex2rgba(getGrayColor(300), 0.6)};

      &:hover {
        background: ${hex2rgba(getGrayColor(300), 0.3)};
      }

      &:focus {
        outline: none;
        background: ${hex2rgba(getGrayColor(300), 0.3)};
      }
    `}
`;

/* -------------------------------------------------------------------------- */
/* Info                                                                       */
/* -------------------------------------------------------------------------- */

export const Info = styled.p`
  color: ${getGrayColor(500)};

  a {
    color: ${getPrimaryColor(400)};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.005em;

    &:hover,
    &:focus {
      outline: none;
      border-bottom-width: 3px;
      border-bottom-color: ${hex2rgba(getPrimaryColor(400), 0.45)};
    }
  }
`;
