import { Action } from 'overmind';

export const state = {
  name: 'Teemu Taskula',
};

const updateName: Action<string> = ({ state }, value) => {
  state.profile.name = value;
};

export const actions = {
  updateName,
};
