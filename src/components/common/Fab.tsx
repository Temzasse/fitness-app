import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib/cjs';
import { TAB_HEIGHT } from '../../utils/constants';
import { animations } from '../../utils/styled';

interface Props {
  onClick: () => any;
  icon: IconType;
}

const Fab: React.FC<Props> = ({ icon, onClick, ...rest }) => {
  const Icon = icon;

  return (
    <Wrapper onClick={onClick} {...rest} type="button">
      <Icon size={28} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: fixed;
  bottom: ${TAB_HEIGHT + 8}px;
  right: 8px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadows.large};
  transform: scale(0);
  opacity: 0;
  animation: ${animations.scaleAndFadeIn} 200ms ease forwards;
  animation-delay: 500ms;

  &:active {
    background-color: ${(p) => p.theme.colors['primary-dark-1']};
  }
`;

export default Fab;
