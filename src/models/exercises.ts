import { AsyncAction } from 'overmind';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  // Eg. repetitions or time
  levelDescriptions: {
    low: string;
    medium: string;
    hight: string;
  };
  environment: 'indoor' | 'outdoor' | 'any';
  // Eg. "Legs", "Mid body", or "Arms"
  tags: string[];
}

interface State {
  ids: string[];
  items: { [id: string]: Exercise };
}

export const state: State = {
  ids: [],
  items: {},
};

const loadExercises: AsyncAction = async ({ state, effects }) => {
  const exercises = await effects.storage.exercises.load();
  state.exercises = exercises;
};

export const actions = {
  loadExercises,
};
