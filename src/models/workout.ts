import { AsyncAction } from 'overmind';
import { Exercise } from './exercises';
import { Photo } from '../utils/photos';

interface Workout {
  id: string;
  name: string;
  category: 'aerobic' | 'strength' | 'interval' | 'flexibility' | 'other';
  image: Photo;
  exercises: Exercise[];
  sets: number;
  duration?: string;
}

interface State {
  ids: string[];
  items: { [id: string]: Workout };
}

export const state: State = {
  ids: [],
  items: {},
};

const loadWorkouts: AsyncAction = async ({ state, effects }) => {
  const workout = await effects.storage.workout.load();
  state.workout = workout;
};

export const actions = {
  loadWorkouts,
};
