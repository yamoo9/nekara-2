import React from 'react';
import { string, bool, node, any, objectOf } from 'prop-types';
import { A11yHidden } from 'components';
import { Control, Label, Input } from './FormInput.styled';

export function FormInput({
  id,
  label,
  invisibleLabel = false,
  type = 'text',
  value = null,
  onChange = null,
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
        id={id}
        type={type}
        placeholder={children}
        value={value}
        onChange={onChange}
        readOnly={value && !onChange}
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
