import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Stack } from 'styled-layout';
import { Text } from '../components/common';
import { useAppState } from '../models';
import NavHeader from '../navigation/NavHeader';

const ExerciseDetails = () => {
  const params = useParams();
  const { state } = useAppState();
  const exercise = state.exercises.items[params.id];

  if (!exercise) {
    return (
      <div>
        <Text variant="body">Exercise not found</Text>
      </div>
    );
  }

  return (
    <Stack>
      <NavHeader title={exercise.name} />
      <Text variant="title-2">{exercise.name}</Text>
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

export default ExerciseDetails;
