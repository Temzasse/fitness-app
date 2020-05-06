import { AsyncAction, Action, Derive } from 'overmind';
import { Exercise } from './exercise';
import { Photo } from '../utils/photos';
import { byNameSort, guid, sleep } from '../utils/common';

export interface Workout {
  id: string;
  name: string;
  image: Photo;
  exercises: Exercise[];
  sets: number;
  duration?: string;
}

interface EditableWorkout {
  name?: string;
  image?: Photo;
  exercises?: string[];
  sets?: number;
  duration?: string;
}

type State = {
  items: { [id: string]: Workout };
  sorted: Derive<State, Workout[]>;
  formState: 'initial' | 'editing' | 'saving' | 'saved' | 'failed';
  new: EditableWorkout;
  isNewValid: Derive<State, boolean>;
};

export const state: State = {
  items: {},
  sorted: (state) => Object.values(state.items).sort(byNameSort),
  formState: 'initial',
  new: {},
  isNewValid: (state) =>
    !!state.new.name &&
    !!state.new.sets &&
    !!state.new.exercises?.length &&
    !!state.new.image,
};

const updateNewWorkout: Action<EditableWorkout> = ({ state }, updates) => {
  state.workouts.new = { ...state.workouts.new, ...updates };
  state.workouts.formState = 'editing';
};

const toggleExerciseInNewWorkout: Action<string> = ({ state }, id) => {
  if (!state.workouts.new.exercises) {
    state.workouts.new.exercises = [id];
  } else {
    const foundIndex = state.workouts.new.exercises.findIndex((i) => i === id);

    if (foundIndex !== -1) {
      state.workouts.new.exercises.splice(foundIndex, 1);
    } else {
      state.workouts.new.exercises.push(id);
    }
  }
  state.workouts.formState = 'editing';
};

const clearNewWorkout: Action = ({ state }) => {
  state.workouts.new = {};
  state.workouts.formState = 'initial';
};

const saveNewWorkout: AsyncAction<any> = async (
  { state, actions, effects },
  navigate
) => {
  if (state.workouts.isNewValid) {
    state.workouts.formState = 'saving';

    try {
      const editable = state.workouts.new as Required<EditableWorkout>;
      const id = guid();
      const workout: Workout = {
        id,
        name: editable.name,
        image: editable.image,
        sets: editable.sets,
        duration: editable.duration,
        exercises: editable.exercises.map((eId) => state.exercises.items[eId]),
      };

      state.workouts.items[id] = workout;
      await effects.storage.workouts.append(workout);
      await sleep(1000);

      state.workouts.formState = 'saved';

      navigate('..', { state: { scrollIntoView: id } });
      actions.workouts.clearNewWorkout();
    } catch (error) {
      console.log('> Failed to save workout', error);
      state.workouts.formState = 'failed';
    }
  }
};

export const actions = {
  updateNewWorkout,
  toggleExerciseInNewWorkout,
  clearNewWorkout,
  saveNewWorkout,
};
