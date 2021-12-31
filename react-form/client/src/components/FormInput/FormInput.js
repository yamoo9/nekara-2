import React from 'react';
import { string, bool, node, any, objectOf } from 'prop-types';
import { A11yHidden } from 'components';
import { Control, Label, Input } from './FormInput.styled';

export function FormInput({
  id,
  label,
  type = 'text',
  invisibleLabel = false,
  children = null,
  forwardRef = null,
  inputProps = {},
  ...restProps
}) {
  return (
    <Control {...restProps}>
      {invisibleLabel ? (
        <A11yHidden as="label" htmlFor={id}>
          {label}
        </A11yHidden>
      ) : (
        <Label htmlFor={id}>{label}</Label>
      )}
      <Input
        ref={forwardRef}
        type={type}
        id={id}
        placeholder={children}
        {...inputProps}
      />
    </Control>
  );
}

FormInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: string,
  invisibleLabel: bool,
  children: node,
  inputProps: objectOf(any),
  restProps: any,
};
