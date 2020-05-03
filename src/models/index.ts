import { IConfig } from 'overmind';
import { createHook } from 'overmind-react';
import * as photos from '../utils/photos';
import * as storage from '../utils/storage';
import * as workout from './workout';
import * as exercises from './exercises';
import * as profile from './profile';

export const config = {
  state: {
    workout: workout.state,
    exercises: exercises.state,
    profile: profile.state,
  },
  actions: {
    workout: workout.actions,
    exercises: exercises.actions,
    profile: profile.actions,
  },
  effects: {
    api: {
      photos,
    },
    storage: {
      exercises: storage.createStorage('exercises'),
      workout: storage.createStorage('workout'),
    },
  },
};

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
