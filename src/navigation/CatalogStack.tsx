import * as React from 'react';
import Catalog from '../screens/Catalog';
import Exercise from '../screens/Exercise';
import StackNavigator from './StackNavigator';

const CatalogStack = () => {
  return (
    <StackNavigator
      stack={[
        { component: Catalog, path: '/' },
        { component: Exercise, path: ':id' },
      ]}
    />
  );
};

export default CatalogStack;
