import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { useAppState } from '../models';
import { Fab } from '../components/common';
import WorkoutCard from '../components/WorkoutCard';
import TitledNavHeader from '../navigation/TitledNavHeader';
import { useScrollIntoView } from '../utils/scroll';

const Workouts = () => {
  const { state: navState } = useLocation();
  const navigate = useNavigate();
  const { state } = useAppState();
  const workouts = state.workouts.sorted;

  // Automatically scroll newly added workout into view
  useScrollIntoView(navState && navState.scrollIntoView);

  return (
    <>
      <TitledNavHeader title="Harjoitukset" />

      <Spacer size="large" />

      <Stack spacing="large">
        {workouts.map((workout) => (
          <WorkoutLink key={workout.id} id={workout.id} to={workout.id}>
            <WorkoutCard workout={workout} />
          </WorkoutLink>
        ))}
      </Stack>

      <Fab icon={MdAdd} onClick={() => navigate('create')} />
    </>
  );
};

const WorkoutLink = styled(Link)`
  width: 100%;
`;

export default Workouts;
