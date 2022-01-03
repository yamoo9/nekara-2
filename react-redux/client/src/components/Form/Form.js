import 'styled-components/macro';
import { forwardRef, memo } from 'react';
import { string, bool, object, oneOf } from 'prop-types';
import { A11yHidden } from 'components';
import {
  Form as StyledForm,
  Container,
  Headline,
  Control,
  Label,
  Input,
  IconSuccess,
  IconError,
  ErrorMessage,
  Button,
  Info,
} from './Form.styled';

/* -------------------------------------------------------------------------- */
/* Form                                                                       */
/* -------------------------------------------------------------------------- */

export const Form = memo(
  forwardRef(function Form({ css, ...resetProps }, ref) {
    return <StyledForm ref={ref} css={css} {...resetProps} />;
  })
);

/* -------------------------------------------------------------------------- */
/* FormContainer                                                              */
/* -------------------------------------------------------------------------- */
Form.Container = memo(function FormContainer(props) {
  return <Container {...props} />;
});

/* -------------------------------------------------------------------------- */
/* FormHeadline                                                              */
/* -------------------------------------------------------------------------- */
Form.Headline = memo(function FormHeadline(props) {
  return <Headline {...props} />;
});

/* -------------------------------------------------------------------------- */
/* FormInput                                                                  */
/* -------------------------------------------------------------------------- */

Form.Input = memo(
  forwardRef(function FormInput(
    {
      id,
      label,
      type,
      invisibleLabel,
      error,
      success,
      children,
      controlProps,
      ...restProps
    },
    ref
  ) {
    let descId = `${id}__desc`;
    return (
      <Control {...controlProps}>
        {invisibleLabel ? (
          <A11yHidden as="label" htmlFor={id}>
            {label}
          </A11yHidden>
        ) : (
          <Label htmlFor={id}>{label}</Label>
        )}
        <Input
          ref={ref}
          id={id}
          type={type}
          placeholder={children}
          error={error}
          success={success}
          aria-describedby={descId}
          {...restProps}
        />
        {success && <IconSuccess />}
        {error && <IconError />}
        <ErrorMessage id={descId} role="alert" aria-live="assertive">
          {error}
        </ErrorMessage>
      </Control>
    );
  })
);

Form.Input.defaultProps = {
  type: 'text',
  invisibleLabel: false,
  error: '',
  success: false,
};

Form.Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: oneOf(['text', 'email', 'password']),
  invisibleLabel: bool,
  error: string,
  success: bool,
  children: string,
  controlProps: object,
};

/* -------------------------------------------------------------------------- */
/* FormButton                                                                 */
/* -------------------------------------------------------------------------- */

Form.Button = memo(
  forwardRef(function FormButton({ submit, reset, css, ...restProps }, ref) {
    let buttonType = 'button';
    if (submit) buttonType = 'submit';
    if (reset) buttonType = 'reset';

    return <Button ref={ref} type={buttonType} css={css} {...restProps} />;
  })
);

Form.Button.defaultProps = {
  submit: false,
  reset: false,
  css: null,
};

Form.Button.propTypes = {
  submit: bool,
  reset: bool,
  css: string,
};

/* -------------------------------------------------------------------------- */
/* FormInfo                                                                   */
/* -------------------------------------------------------------------------- */

Form.Info = memo(
  forwardRef(function FormInfo(props, ref) {
    return <Info ref={ref} {...props} />;
  })
);
