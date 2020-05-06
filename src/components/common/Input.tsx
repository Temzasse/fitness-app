import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

type Variant = keyof DefaultTheme['typography'];

type Props = {
  variant?: Variant;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = styled.input<Props>`
  ${(p) => p.theme.typography[p.variant || 'body']};
  color: ${(p) => p.theme.colors.black};
  padding: ${(p) => p.theme.spacing.small};
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;

  &::placeholder {
    color: ${(p) => p.theme.colors['grey-50']};
  }

  &:focus {
    border-color: ${(p) => p.theme.colors['grey-30']};
  }
`;

Input.defaultProps = {
  value: '',
};

export default Input;
