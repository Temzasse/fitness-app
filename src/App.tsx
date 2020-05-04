import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { MdDirectionsRun, MdPlaylistAdd } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';

import TabNavigator from './screens/TabNavigator';

const Home = React.lazy(() => import('./screens/Home'));
const Catalog = React.lazy(() => import('./screens/Catalog'));
const Profile = React.lazy(() => import('./screens/Profile'));

function App() {
  return (
    <Wrapper>
      <TabNavigator
        tabs={[
          { icon: MdDirectionsRun, to: '/' },
          { icon: MdPlaylistAdd, to: 'catalog' },
          { icon: FiAward, to: 'profile' },
        ]}
      >
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
      </TabNavigator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
