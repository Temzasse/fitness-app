import React from 'react';
import styled from 'styled-components';
import { MdDirectionsRun } from 'react-icons/md';
import { FiUser, FiList, FiHome } from 'react-icons/fi';
import TabNavigator from './navigation/TabNavigator';

const HomeStack = React.lazy(() => import('./navigation/HomeStack'));
const ExerciseStack = React.lazy(() => import('./navigation/ExerciseStack'));
const WorkoutStack = React.lazy(() => import('./navigation/WorkoutStack'));
const ProfileStack = React.lazy(() => import('./navigation/ProfileStack'));

function App() {
  return (
    <Wrapper>
      <TabNavigator
        tabs={[
          {
            component: HomeStack,
            icon: FiHome,
            to: 'home',
          },
          {
            component: WorkoutStack,
            icon: MdDirectionsRun,
            to: 'workout',
          },
          {
            component: ExerciseStack,
            icon: FiList,
            iconProps: { size: 28 },
            to: 'catalog',
          },
          {
            component: ProfileStack,
            icon: FiUser,
            to: 'profile',
          },
        ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
