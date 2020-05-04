import { Exercise } from './exercise';
import { guid, range } from '../utils/common';

export const exercises: Exercise[] = [
  {
    id: guid(),
    name: 'Burpee',
    description: 'Todo',
    environment: 'any',
    levelDescriptions: {
      low: '10 toistoa',
      medium: '15 toistoa',
      high: '20 toistoa',
    },
    category: 'aerobic',
    tags: ['Full-body'],
  },
  {
    id: guid(),
    name: 'Linkkarivatsat',
    description: 'Todo',
    environment: 'any',
    levelDescriptions: {
      low: '10 toistoa',
      medium: '20 toistoa',
      high: '30 toistoa',
    },
    category: 'strength',
    tags: ['Mid-body'],
  },
  {
    id: guid(),
    name: 'Kylkirutistukset',
    description: 'Todo',
    environment: 'any',
    levelDescriptions: {
      low: '15 toistoa',
      medium: '25 toistoa',
      high: '35 toistoa',
    },
    category: 'strength',
    tags: ['Mid-body'],
  },
];

const e = range(20).map((i) => `Harjoitus ${i}`);

export const groupedExercises: {
  [group in Exercise['category']]: string[];
} = {
  aerobic: e,
  strength: e,
  interval: e,
  flexibility: e,
  other: e,
};
