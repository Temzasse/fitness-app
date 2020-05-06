import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Stack } from 'styled-layout';
import { motion } from 'framer-motion';
import { useAppState } from '../models';
import { Text, Duotone } from '../components/common';
import { BackButtonFab } from '../navigation/BackButton';

const WorkoutDetails = () => {
  const params = useParams();
  const { state } = useAppState();
  const workout = state.workouts.items[params.id];

  if (!workout) {
    return <Text variant="body">Workout not found</Text>;
  }

  return (
    <Stack>
      <HeaderImageBleed>
        <ImageWrapper layoutId={`workout-image-${workout.id}`}>
          <HeaderImage
            src={workout.image.urls.regular}
            alt={workout.image.alt}
          />
        </ImageWrapper>
        <BackButtonFab />
      </HeaderImageBleed>

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

const HeaderImageBleed = styled.div`
  margin-top: -${(p) => p.theme.spacing.normal};
  margin-left: -${(p) => p.theme.spacing.normal};
  margin-right: -${(p) => p.theme.spacing.normal};
  position: relative;
  z-index: 1;
`;

const ImageWrapper = styled(Duotone)`
  width: 100vw;
  height: 200px;
`;

const HeaderImage = styled(motion.img)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default WorkoutDetails;
