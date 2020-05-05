import { OnInitialize } from 'overmind';
import { Exercise } from './exercise';
import { Workout } from './workout';
import * as mockData from './mock-data';
import { preloadPhotos } from '../utils/photos';

export const onInitialize: OnInitialize = async ({ state, effects }) => {
  let exercises: Exercise[] = await effects.storage.exercises.load();
  let workouts: Workout[] = await effects.storage.workouts.load();

  // --------------------------------------------------------
  // Set mock data for testing
  if (exercises.length === 0) {
    exercises = mockData.exercises;
    effects.storage.exercises.set(mockData.exercises);
  }

  if (workouts.length === 0) {
    workouts = mockData.workouts;
    effects.storage.workouts.set(mockData.workouts);
  }
  // --------------------------------------------------------

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

  // Preload Unsplash photos for better animation experience
  preloadPhotos(workouts.map((w) => w.image.urls.regular));
};
