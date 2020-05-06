import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type ButtonState = 'initial' | 'loading' | 'disabled';

type Props = {
  state: ButtonState;
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  state,
  text,
  disabled = state === 'disabled',
  ...rest
}) => {
  return (
    <ButtonBase disabled={disabled || state === 'loading'} {...rest}>
      {text}
      <AnimatePresence>
        {state === 'loading' && (
          <Loader
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingIndicator size={24} />
          </Loader>
        )}
      </AnimatePresence>
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  ${(p) => p.theme.typography.body};
  font-weight: 500;
  display: block;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  color: ${(p) => p.theme.colors['primary-dark-3']};
  background-color: ${(p) => p.theme.colors['primary-light-3']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:disabled {
    background-color: ${(p) => p.theme.colors['grey-20']};
    color: ${(p) => p.theme.colors['grey-70']};
  }
`;

const Loader = styled(motion.div)`
  position: absolute;
  right: ${(p) => p.theme.spacing.normal};
  top: 50%;
  transform: translateY(-50%);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIndicator = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 800ms infinite linear;
`;

export default Button;
