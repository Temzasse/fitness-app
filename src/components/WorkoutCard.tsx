import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { motion } from 'framer-motion';
import { MdTimer } from 'react-icons/md';
import { Text } from '../components/common';
import { Workout } from '../models/workout';
import { animations } from '../utils/styled';

interface Props {
  workout: Workout;
}

const WorkoutCard: React.FC<Props> = ({ workout }) => {
  return (
    <CardStack spacing="none">
      <Image
        src={workout.image.urls.regular}
        alt={workout.image.alt}
        layoutId={`workout-image-${workout.id}`}
      />

      <DetailsStack spacing="small">
        <MetaInfoStack axis="x" justify="space-between">
          <Text variant="overline" color="primary">
            {workout.sets} kierrosta
          </Text>
        </MetaInfoStack>

        <Text variant="title-2">{workout.name}</Text>
      </DetailsStack>

      {workout.duration && (
        <DurationStack axis="x" spacing="xsmall" align="center">
          <TimerIcon size={16} />
          <Text variant="caption" color="grey-10">
            {workout.duration}
          </Text>
        </DurationStack>
      )}
    </CardStack>
  );
};

const CardStack = styled(Stack)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows.small};
  width: 100%;
  position: relative;
`;

const Image = styled(motion.img)`
  display: block;
  width: 100%;
  height: 25vh;
  max-height: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  object-fit: cover;
`;

const DetailsStack = styled(Stack)`
  width: 100%;
  padding: ${(p) => p.theme.spacing.normal};
`;

const MetaInfoStack = styled(Stack)`
  width: 100%;
`;

const DurationStack = styled(Stack)`
  position: absolute;
  top: ${(p) => p.theme.spacing.normal};
  right: ${(p) => p.theme.spacing.normal};
  padding: ${(p) => p.theme.spacing.xsmall} ${(p) => p.theme.spacing.small};
  border-radius: 999px;
  background-color: ${(p) => p.theme.colors['grey-90']};
  opacity: 0;
  animation: ${animations.fadeIn} 200ms ease forwards;
  animation-delay: 500ms;
`;

const TimerIcon = styled(MdTimer)`
  color: ${(p) => p.theme.colors['grey-10']};
`;

export default WorkoutCard;
