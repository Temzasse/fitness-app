import { Derive } from 'overmind';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  // Eg. repetitions or time
  levelDescriptions: {
    low: string;
    medium: string;
    high: string;
  };
  environment: 'indoor' | 'outdoor' | 'any';
  category: 'aerobic' | 'strength' | 'interval' | 'flexibility' | 'other';
  // Eg. "Legs", "Mid body", or "Arms"
  tags: string[];
}

type ExercisesByCategory = {
  [group in Exercise['category']]: Exercise[];
};

type State = {
  ids: string[];
  items: { [id: string]: Exercise };
  byCategory: Derive<State, ExercisesByCategory>;
};

export const state: State = {
  ids: [],
  items: {},
  byCategory: (state) => {
    return Object.values(state.items).reduce((acc, val) => {
      if (!acc[val.category]) {
        acc[val.category] = [val];
      } else {
        acc[val.category].push(val);
      }
      return acc;
    }, {} as ExercisesByCategory);
  },
};

export const actions = {};
