import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { useAppState } from '../models';
import WorkoutCard from '../components/WorkoutCard';
import TitledNavHeader from '../navigation/TitledNavHeader';
import { Fab } from '../components/common';

const Workouts = () => {
  const { state } = useAppState();
  const workouts = state.workouts.sorted;

  function createWorkout() {
    console.log('> Create workout');
  }

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

      <Fab icon={MdAdd} onClick={createWorkout} />
    </>
  );
};

const WorkoutLink = styled(Link)`
  width: 100%;
`;

export default Workouts;
