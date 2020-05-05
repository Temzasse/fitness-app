import * as React from 'react';
import Exercises from '../screens/Exercises';
import ExerciseDetails from '../screens/ExerciseDetails';
import StackNavigator from './StackNavigator';

const ExerciseStack = () => {
  return (
    <StackNavigator
      stack={[
        { component: Exercises, path: '/' },
        { component: ExerciseDetails, path: ':id' },
      ]}
    />
  );
};

export default ExerciseStack;
