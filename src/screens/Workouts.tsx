import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { Link } from 'react-router-dom';
import { useAppState } from '../models';
import WorkoutCard from '../components/WorkoutCard';
import TitledNavHeader from '../navigation/TitledNavHeader';

const Workouts = () => {
  const { state } = useAppState();
  const workouts = state.workouts.sorted;

  return (
    <>
      <TitledNavHeader title="Harjoitukset" />

      <Spacer size="large" />

      <Stack spacing="large">
        {workouts.map((workout) => (
          <WorkoutLink key={workout.id} to={workout.id}>
            <WorkoutCard workout={workout} />
          </WorkoutLink>
        ))}
      </Stack>
    </>
  );
};

const WorkoutLink = styled(Link)`
  width: 100%;
`;

export default Workouts;
