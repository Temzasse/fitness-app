import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { Link } from 'react-router-dom';
import { useAppState } from '../models';
import { Text } from '../components/common';
import WorkoutCard from '../components/WorkoutCard';

const Workouts = () => {
  const { state } = useAppState();
  const workouts = state.workouts.sorted;

  return (
    <Stack spacing="large">
      <Text variant="title-1">Harjoitukset</Text>

      {workouts.map((workout) => (
        <WorkoutLink key={workout.id} to={workout.id}>
          <WorkoutCard workout={workout} />
        </WorkoutLink>
      ))}
    </Stack>
  );
};

const WorkoutLink = styled(Link)`
  width: 100%;
`;

export default Workouts;
