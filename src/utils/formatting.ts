import { Exercise } from '../models/exercise';

const categoryNames: { [category in Exercise['category']]: string } = {
  aerobic: 'Aerobinen',
  strength: 'Voima',
  flexibility: 'Liikkuvuus',
  interval: 'Intervalli',
  other: 'Muu',
};

export const getCategoryName = (category: Exercise['category']) => {
  return categoryNames[category];
};
