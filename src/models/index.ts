import { IConfig } from 'overmind';
import { createHook } from 'overmind-react';
import * as photos from '../utils/photos';
import * as storage from '../utils/storage';
import * as workouts from './workout';
import * as exercises from './exercise';
import * as profile from './profile';
import { onInitialize } from './init';

export const config = {
  onInitialize,
  state: {
    workouts: workouts.state,
    exercises: exercises.state,
    profile: profile.state,
  },
  actions: {
    workouts: workouts.actions,
    exercises: exercises.actions,
    profile: profile.actions,
  },
  effects: {
    api: {
      photos,
    },
    storage: {
      exercises: storage.createStorage('exercises'),
      workouts: storage.createStorage('workouts'),
    },
  },
};

declare module 'overmind' {
  interface Config
    extends IConfig<{
      state: typeof config.state;
      actions: typeof config.actions;
      effects: typeof config.effects;
      onInitialize: typeof config.onInitialize;
    }> {}
}

export const useAppState = createHook<typeof config>();
