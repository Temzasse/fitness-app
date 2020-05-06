import * as React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import StackNavigator from './StackNavigator';
import Workouts from '../screens/Workouts';
import WorkoutDetails from '../screens/WorkoutDetails';
import CreateWorkout from '../screens/CreateWorkout';
import PhotoSelector from '../screens/PhotoSelector';
import ExerciseSelector from '../screens/ExerciseSelector';

const WorkoutStack = () => {
  return (
    <AnimateSharedLayout>
      <StackNavigator
        stack={[
          {
            component: Workouts,
            path: '/',
            disableAnimation: true,
          },
          {
            component: CreateWorkout,
            path: 'create',
          },
          {
            component: PhotoSelector,
            path: 'create/select-photo',
          },
          {
            component: ExerciseSelector,
            path: 'create/select-exercises',
          },
          {
            component: WorkoutDetails,
            path: ':id',
            disableAnimation: true,
          },
        ]}
      />
    </AnimateSharedLayout>
  );
};

export default WorkoutStack;
