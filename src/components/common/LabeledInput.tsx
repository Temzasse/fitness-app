import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib/cjs';
import { Spacer } from 'styled-layout';
import Text from './Text';

type Props = {
  icon?: IconType;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const LabeledInput: React.FC<Props> = ({
  icon,
  label,
  value = '',
  ...rest
}) => {
  const Icon = icon;

  return (
    <Wrapper>
      <LabelBlock>
        {Icon && (
          <IconWrapper>
            <Icon size={18} />
          </IconWrapper>
        )}

        <Spacer axis="x" size="small" />

        <Text variant="body" as="span">
          {label}
        </Text>
      </LabelBlock>

      <Spacer axis="x" />

      <Input value={value} {...rest} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors['grey-20']};
  padding: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.normal};
  margin-left: -${(p) => p.theme.spacing.normal};
  margin-right: -${(p) => p.theme.spacing.normal};
  display: flex;
  align-items: center;
  width: 100vw;
  height: 56px;
`;

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: ${(p) => p.theme.colors['primary-light-3']};
  color: ${(p) => p.theme.colors['primary-dark-1']};
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  ${(p) => p.theme.typography.body};
  color: ${(p) => p.theme.colors.black};
  height: 100%;
  width: 100%;
  text-align: right;

  &::placeholder {
    color: ${(p) => p.theme.colors['grey-50']};
  }
`;

export default LabeledInput;
