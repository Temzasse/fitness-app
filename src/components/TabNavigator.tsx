import React from 'react';
import { Routes, Link, useMatch } from 'react-router-dom';
import { FiAward } from 'react-icons/fi';
import { MdDirectionsRun, MdPlaylistAdd } from 'react-icons/md';
import styled, { useTheme } from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const TabNavigator: React.FC = ({ children }) => {
  const theme = useTheme();
  const isHome = useMatch('/');
  const isCatalog = useMatch('catalog');
  const isProfile = useMatch('profile');

  return (
    <Wrapper>
      <Main>
        <AnimatePresence initial={false}>
          <Routes>
            {React.Children.map(children, (child) => (
              <TabScreen
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                {child}
              </TabScreen>
            ))}
          </Routes>
        </AnimatePresence>
      </Main>

      <AnimateSharedLayout>
        <Tabs>
          <TabsStack>
            <Tab to="/">
              <MdDirectionsRun
                size={26}
                color={isHome ? theme.colors.primary : theme.colors.black}
              />
              {isHome && <TabIndicator />}
            </Tab>

            <Tab to="catalog">
              <MdPlaylistAdd
                size={28}
                color={isCatalog ? theme.colors.primary : theme.colors.black}
              />
              {isCatalog && <TabIndicator />}
            </Tab>

            <Tab to="profile">
              <FiAward
                size={24}
                color={isProfile ? theme.colors.primary : theme.colors.black}
              />
              {isProfile && <TabIndicator />}
            </Tab>
          </TabsStack>
        </Tabs>
      </AnimateSharedLayout>
    </Wrapper>
  );
};

const TAB_HEIGHT = 54;

const Wrapper = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.colors['grey-10']};
`;

const Main = styled.main`
  padding-bottom: ${TAB_HEIGHT}px;
`;

const Tabs = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(p) => p.theme.colors.white};
`;

const TabScreen = styled(motion.div)`
  min-height: calc(100vh - ${TAB_HEIGHT}px);
  background-color: ${(p) => p.theme.colors.white};
  padding: ${p => p.theme.spacing.normal};
`;

const TabsStack = styled.div`
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Tab = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${TAB_HEIGHT}px;
  transition: transform 100ms ease;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  &:active > svg {
    transform: scale(1.1);
  }

  & > svg {
    z-index: 1;
  }
`;

const TabIndicator = styled(motion.div).attrs({ layoutId: 'indicator' })`
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  background-color: ${(p) => p.theme.colors['primary-light-3']};
  border-radius: 8px;
  z-index: -1;
`;

export default TabNavigator;
