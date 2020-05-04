// import { AsyncAction } from 'overmind';

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

interface State {
  ids: string[];
  items: { [id: string]: Exercise };
}

export const state: State = {
  ids: [],
  items: {},
};

export const actions = {};
