import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Stack } from 'styled-layout';
import { Text } from '../components/common';
import { animations } from '../utils/styled';

const BackButton: React.FC<any> = (props) => {
  return (
    <Link to=".." {...props}>
      <Stack axis="x" spacing="small" align="center">
        <BackIcon />
        <Text variant="caption">Takaisin</Text>
      </Stack>
    </Link>
  );
};

export const BackButtonFab: React.FC<any> = (props) => {
  return (
    <BackButtonFabWrapper>
      <BackButton {...props} />
    </BackButtonFabWrapper>
  );
};

const BackIcon = styled(FiArrowLeft).attrs({ size: 18 })`
  color: ${(p) => p.theme.colors.black};
`;

const BackButtonFabWrapper = styled.div`
  z-index: 999;
  position: absolute;
  top: ${(p) => p.theme.spacing.normal};
  top: max(
    ${(p) => p.theme.spacing.normal},
    calc(env(safe-area-inset-top) + ${(p) => p.theme.spacing.normal})
  );
  left: ${(p) => p.theme.spacing.normal};
  padding: ${(p) => p.theme.spacing.xsmall};
  padding-right: ${(p) => p.theme.spacing.small};
  border-radius: 999px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadows.normal};
  opacity: 0;
  transform: translateY(-100%);
  animation: ${animations.slideDownAndFadeIn} 200ms ease forwards;
  animation-delay: 500ms;
`;

export default BackButton;
