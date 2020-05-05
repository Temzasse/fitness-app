import * as React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import StackNavigator from './StackNavigator';
import Workouts from '../screens/Workouts';
import WorkoutDetails from '../screens/WorkoutDetails';

const WorkoutStack = () => {
  return (
    <AnimateSharedLayout>
      <StackNavigator
        stack={[
          { component: Workouts, path: '/', disableAnimation: true },
          { component: WorkoutDetails, path: ':id', disableAnimation: true },
        ]}
      />
    </AnimateSharedLayout>
  );
};

export default WorkoutStack;
