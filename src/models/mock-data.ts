import { Exercise } from './exercise';
import { guid } from '../utils/common';
import { Workout } from './workout';

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

export const workouts: Workout[] = [
  {
    id: guid(),
    exercises,
    name: 'Testi harjoitus 1',
    sets: 3,
    image: {
      id: 'QT-l619id6w',
      alt: 'six assorted-color surfboards on brown board',
      urls: {
        raw:
          'https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        full:
          'https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        regular:
          'https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        small:
          'https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        thumb:
          'https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
      },
    },
  },
  {
    id: guid(),
    exercises,
    name: 'Testi harjoitus 2',
    sets: 4,
    image: {
      id: '1SrhHzS0fZQ',
      alt: 'photo of woman kicking soccer ball',
      urls: {
        raw:
          'https://images.unsplash.com/photo-1532307015656-891a996b7578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        full:
          'https://images.unsplash.com/photo-1532307015656-891a996b7578?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        regular:
          'https://images.unsplash.com/photo-1532307015656-891a996b7578?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        small:
          'https://images.unsplash.com/photo-1532307015656-891a996b7578?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        thumb:
          'https://images.unsplash.com/photo-1532307015656-891a996b7578?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
      },
    },
  },
  {
    id: guid(),
    exercises,
    name: 'Testi harjoitus 3',
    sets: 2,
    duration: '30 min',
    image: {
      id: 'TZ3I_ME6Vcs',
      alt: 'two men playing lacrosse sports',
      urls: {
        raw:
          'https://images.unsplash.com/photo-1549837031-482676aee355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        full:
          'https://images.unsplash.com/photo-1549837031-482676aee355?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        regular:
          'https://images.unsplash.com/photo-1549837031-482676aee355?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        small:
          'https://images.unsplash.com/photo-1549837031-482676aee355?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
        thumb:
          'https://images.unsplash.com/photo-1549837031-482676aee355?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMTg2NX0',
      },
    },
  },
];
