import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { motion } from 'framer-motion';
import { Text } from '../components/common';
import { Workout } from '../models/workout';

interface Props {
  workout: Workout;
}

const WorkoutCard: React.FC<Props> = ({ workout }) => {
  return (
    <CardStack spacing="none">
      <Image
        src={workout.image.urls.small}
        alt={workout.image.alt}
        layoutId={`workout-image-${workout.id}`}
      />
      <DetailsStack spacing="small">
        <Text variant="overline" color="primary-dark-1">
          {workout.sets} kierrosta
        </Text>
        <Text variant="title-2">{workout.name}</Text>
      </DetailsStack>
    </CardStack>
  );
};

const CardStack = styled(Stack)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows.medium};
  width: 100%;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 30vh;
  max-height: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  object-fit: cover;
`;

const DetailsStack = styled(Stack)`
  padding: ${(p) => p.theme.spacing.normal};
`;

export default WorkoutCard;
