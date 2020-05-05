import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Stack } from 'styled-layout';
import { motion } from 'framer-motion';
import { useAppState } from '../models';
import { animations } from '../utils/styled';
import { Text } from '../components/common';
import BackButton from '../navigation/BackButton';

const WorkoutDetails = () => {
  const params = useParams();
  const { state } = useAppState();
  const workout = state.workouts.items[params.id];

  if (!workout) {
    return <Text variant="body">Workout not found</Text>;
  }

  return (
    <Stack>
      <HeaderImageWrapper>
        <HeaderImage
          src={workout.image.urls.regular}
          alt={workout.image.alt}
          layoutId={`workout-image-${workout.id}`}
        />
        <BackButtonWrapper>
          <BackButton />
        </BackButtonWrapper>
      </HeaderImageWrapper>

      <Text variant="title-2">{workout.name}</Text>

      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  );
};

const Box = styled.div<{ w?: string }>`
  height: 200px;
  width: ${(p) => p.w || '100%'};
  background-color: ${(p) => p.theme.colors['grey-20']};
  border-radius: 8px;
  flex: none;
`;

const HeaderImageWrapper = styled.div`
  margin-top: -${(p) => p.theme.spacing.normal};
  margin-left: -${(p) => p.theme.spacing.normal};
  margin-right: -${(p) => p.theme.spacing.normal};
  height: 200px;
  position: relative;
  z-index: 1;
`;

const HeaderImage = styled(motion.img)`
  display: block;
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: ${(p) => p.theme.spacing.normal};
  left: ${(p) => p.theme.spacing.normal};
  padding: ${(p) => p.theme.spacing.xsmall};
  padding-right: ${(p) => p.theme.spacing.small};
  border-radius: 999px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadows.medium};
  opacity: 0;
  transform: translateY(-100%);
  animation: ${animations.slideDownAndFadeIn} 200ms ease forwards;
  animation-delay: 500ms;
`;

export default WorkoutDetails;
