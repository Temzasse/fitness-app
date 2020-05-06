import React from 'react';
import styled from 'styled-components';
import { Spacer } from 'styled-layout';
import Text from './Text';

type Props = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = ({ label, ...props }) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  // Make textarea auto-grow/shrinkable
  React.useLayoutEffect(() => {
    const el = inputRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [props.value]);

  return (
    <Label>
      <Text variant="overline">{label}</Text>
      <Spacer size="small" />
      <TextAreaInput rows={4} {...props} ref={inputRef} />
    </Label>
  );
};

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextAreaInput = styled.textarea`
  ${(p) => p.theme.typography.body};
  resize: none;
  padding: ${(p) => p.theme.spacing.small};
  display: block;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors['grey-30']};
  width: 100%;
`;

export default TextArea;
