import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import TabNavigator from './components/TabNavigator';
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import Profile from './screens/Profile';

function App() {
  return (
    <Wrapper>
      <TabNavigator>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
      </TabNavigator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
