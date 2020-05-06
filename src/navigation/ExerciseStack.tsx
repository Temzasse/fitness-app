import * as React from 'react';
import Exercises from '../screens/Exercises';
import ExerciseDetails from '../screens/ExerciseDetails';
import StackNavigator from './StackNavigator';
import CreateExercise from '../screens/CreateExercise';

const ExerciseStack = () => {
  return (
    <StackNavigator
      stack={[
        { component: Exercises, path: '/' },
        { component: ExerciseDetails, path: ':id' },
        { component: CreateExercise, path: 'create' },
      ]}
    />
  );
};

export default ExerciseStack;
