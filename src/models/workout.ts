// import { AsyncAction } from 'overmind';
import { Exercise } from './exercise';
import { Photo } from '../utils/photos';

export interface Workout {
  id: string;
  name: string;
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

export const actions = {};
