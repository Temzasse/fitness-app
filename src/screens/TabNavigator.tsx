import React from 'react';
import { IconType, IconBaseProps } from 'react-icons/lib/cjs';
import styled, { useTheme } from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import {
  Routes,
  Link,
  useLocation,
  useResolvedLocation,
} from 'react-router-dom';

type TabType = {
  to: string;
  icon: IconType;
  iconProps?: IconBaseProps;
};

interface Props {
  tabs: TabType[];
}

const TabNavigator: React.FC<Props> = ({ children, tabs }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <Wrapper>
      <Main>
        <AnimatePresence initial={false}>
          <Routes>
            {React.Children.map(children, (child) => (
              <TabScreen
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <React.Suspense fallback={null}>{child}</React.Suspense>
              </TabScreen>
            ))}
          </Routes>
        </AnimatePresence>
      </Main>

      <Tabs>
        <AnimateSharedLayout>
          <TabsStack>
            {tabs.map((tab) => (
              <Tab
                {...tab}
                key={tab.to}
                baseColor={theme.colors.black}
                activeColor={theme.colors.primary}
                location={location}
              />
            ))}
          </TabsStack>
        </AnimateSharedLayout>
      </Tabs>
    </Wrapper>
  );
};

const Tab: React.FC<
  { baseColor: string; activeColor: string; location: Location } & TabType
> = ({ to, icon, iconProps, baseColor, activeColor, location }) => {
  const resolvedLocation = useResolvedLocation(to);
  const isActive = location.pathname === resolvedLocation.pathname;
  const Icon = icon;

  return (
    <TabLink to={to}>
      <Icon
        size={24}
        {...iconProps}
        color={isActive ? activeColor : baseColor}
      />
      {isActive && <TabIndicator />}
    </TabLink>
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
  z-index: 9999;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
`;

const TabScreen = styled(motion.div)`
  min-height: calc(100vh - ${TAB_HEIGHT}px);
  background-color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.spacing.normal};
  position: relative;
`;

const TabsStack = styled.div`
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
`;

const TabLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${TAB_HEIGHT}px;
  transition: transform 100ms ease;
  position: relative;

  &:active > svg {
    transform: scale(1.1);
  }

  & > svg {
    z-index: 1;
  }
`;

const TabIndicator = styled(motion.div).attrs({ layoutId: 'tab-indicator' })`
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
