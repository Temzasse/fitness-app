import React from 'react';
import styled from 'styled-components';
import { MdDirectionsRun, MdPlaylistAdd } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';

import TabNavigator from './navigation/TabNavigator';

const HomeStack = React.lazy(() => import('./navigation/HomeStack'));
const CatalogStack = React.lazy(() => import('./navigation/CatalogStack'));
const ProfileStack = React.lazy(() => import('./navigation/ProfileStack'));

function App() {
  return (
    <Wrapper>
      <TabNavigator
        tabs={[
          { component: HomeStack, icon: MdDirectionsRun, to: 'home' },
          { component: CatalogStack, icon: MdPlaylistAdd, to: 'catalog' },
          { component: ProfileStack, icon: FiAward, to: 'profile' },
        ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
