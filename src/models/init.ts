import { OnInitialize } from 'overmind';
import { Exercise } from './exercise';
import { Workout } from './workout';
import * as mockData from './mock-data';

export const onInitialize: OnInitialize = async ({ state, effects }) => {
  let exercises: Exercise[] = await effects.storage.exercises.load();
  let workouts: Workout[] = await effects.storage.workouts.load();

  if (exercises.length === 0) {
    exercises = mockData.exercises;
  }

  state.exercises.ids = exercises.map((e) => e.id);
  state.exercises.items = exercises.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as { [id: string]: Exercise });

  state.workouts.ids = workouts.map((e) => e.id);
  state.workouts.items = workouts.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as { [id: string]: Workout });
};
