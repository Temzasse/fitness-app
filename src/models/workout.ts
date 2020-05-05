import { Derive } from 'overmind';
import { Exercise } from './exercise';
import { Photo } from '../utils/photos';
import { byNameSort } from '../utils/common';

export interface Workout {
  id: string;
  name: string;
  image: Photo;
  exercises: Exercise[];
  sets: number;
  duration?: string;
}

type State = {
  ids: string[];
  items: { [id: string]: Workout };
  sorted: Derive<State, Workout[]>;
};

export const state: State = {
  ids: [],
  items: {},
  sorted: (state) => Object.values(state.items).sort(byNameSort),
};

export const actions = {};
