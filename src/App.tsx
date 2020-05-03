import React from 'react';
import { Route } from 'react-router-dom';
import TabNavigator from './components/TabNavigator';
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import Profile from './screens/Profile';
import { useOvermind } from './models';

function App() {
  const { actions } = useOvermind();

  React.useEffect(() => {
    actions.exercises.loadExercises();
  }, []); // eslint-disable-line

  return (
    <TabNavigator>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/profile" element={<Profile />} />
    </TabNavigator>
  );
}

export default App;
