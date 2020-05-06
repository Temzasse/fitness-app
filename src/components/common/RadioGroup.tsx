import React from 'react';
import styled, { css } from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import Text from './Text';

type RadioInput = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
  label: string;
  options: RadioInput[];
  stacked?: boolean;
};

const RadioGroup: React.FC<Props> = ({
  label: groupLabel,
  options,
  stacked,
  ...props
}) => {
  return (
    <RadioGroupStack {...props} spacing="small">
      <Text variant="overline">{groupLabel}</Text>

      <RadioStack
        axis={!!stacked ? 'y' : 'x'}
        dividers="grey-30"
        spacing="none"
      >
        {options.map(({ label, ...rest }) => (
          <Label key={label}>
            <Radio {...rest} type="radio" />
            <Spacer axis="x" size="small" />
            <Text variant="body" as="span">
              {label}
            </Text>
          </Label>
        ))}
      </RadioStack>
    </RadioGroupStack>
  );
};

const RadioGroupStack = styled(Stack)`
  width: 100%;
`;

const RadioStack = styled(Stack)`
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors['grey-30']};
  border-radius: 8px;
`;

const Label = styled.label`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.spacing.small};
`;

const Radio = styled.input`
  display: inline-block;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors['grey-30']};
  width: 24px;
  height: 24px;
  position: relative;

  &:after {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    display: block;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.white};
    opacity: 0;
    transform: scale(0.5);
  }

  &:checked {
    background-color: ${(p) => p.theme.colors.primary};
    border-color: ${(p) => p.theme.colors.primary};

    &:after {
      opacity: 1;
    }
  }
`;

export default RadioGroup;
