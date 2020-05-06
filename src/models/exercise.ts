import { AsyncAction, Action, Derive } from 'overmind';
import { guid, sleep } from '../utils/common';

type ExerciseEnv = 'indoor' | 'outdoor' | 'any';
type ExerciseCategory =
  | 'aerobic'
  | 'strength'
  | 'interval'
  | 'flexibility'
  | 'other';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  // Eg. repetitions or time
  levelDescriptions: { low: string; medium: string; high: string };
  environment: ExerciseEnv;
  category: ExerciseCategory;
  // Eg. "Legs", "Mid body", or "Arms"
  tags: string[];
}

type ExercisesByCategory = {
  [group in Exercise['category']]: Exercise[];
};

type EditableExercise = Omit<Exercise, 'id'>;

type State = {
  items: { [id: string]: Exercise };
  byCategory: Derive<State, ExercisesByCategory>;
  formState: 'initial' | 'editing' | 'saving' | 'saved' | 'failed';
  new: EditableExercise;
  isNewValid: Derive<State, boolean>;
};

const initialExercise: EditableExercise = {
  name: '',
  description: '',
  levelDescriptions: { low: '', medium: '', high: '' },
  environment: 'any',
  category: 'other',
  tags: [],
};

export const state: State = {
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
  formState: 'initial',
  new: initialExercise,
  isNewValid: (state) =>
    !!state.new.name &&
    !!state.new.description &&
    !!Object.values(state.new.levelDescriptions)
      .map((d) => !!d)
      .filter(Boolean).length,
};

const updateNewExercise: Action<Partial<EditableExercise>> = ({ state }, updates) => {
  state.exercises.new = { ...state.exercises.new, ...updates };
  state.exercises.formState = 'editing';
};

const clearNewExercise: Action = ({ state }) => {
  state.exercises.new = initialExercise;
  state.exercises.formState = 'initial';
};

const saveNewExercise: AsyncAction<any> = async (
  { state, actions, effects },
  navigate
) => {
  if (state.exercises.isNewValid) {
    state.exercises.formState = 'saving';

    try {
      const editable = state.exercises.new;
      const id = guid();
      const exercise: Exercise = {
        id,
        name: editable.name,
        description: editable.description,
        levelDescriptions: editable.levelDescriptions,
        category: editable.category,
        environment: editable.environment,
        tags: editable.tags,
      };

      state.exercises.items[id] = exercise;
      await effects.storage.exercises.append(exercise);
      await sleep(1000);

      state.exercises.formState = 'saved';

      navigate('..');
      actions.exercises.clearNewExercise();
    } catch (error) {
      console.log('> Failed to save exercise', error);
      state.exercises.formState = 'failed';
    }
  }
};

export const actions = {
  updateNewExercise,
  clearNewExercise,
  saveNewExercise,
};
