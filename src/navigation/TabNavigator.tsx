import React from 'react';
import { IconType, IconBaseProps } from 'react-icons/lib/cjs';
import styled, { useTheme } from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';

import { TAB_HEIGHT } from '../utils/constants';
import { animations } from '../utils/styled';
import { useScrollRestoration } from '../utils/scroll';

type TabType = {
  to: string;
  icon: IconType;
  iconProps?: IconBaseProps;
  component: React.LazyExoticComponent<() => JSX.Element>;
};

interface Props {
  tabs: TabType[];
}

const TabRoute = (tab: TabType) => {
  useScrollRestoration(`tab-${tab.to}`);

  return (
    <TabScreen>
      <React.Suspense fallback={null}>{<tab.component />}</React.Suspense>
    </TabScreen>
  );
};

const RedirectToHome = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('home');
  }, []); // eslint-disable-line

  return null;
};

const TabNavigator: React.FC<Props> = ({ tabs }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <Wrapper>
      <Main>
        <Routes>
          {tabs.map((tab) => (
            <Route
              key={tab.to}
              path={`${tab.to}/*`}
              element={<TabRoute {...tab} />}
            />
          ))}

          <Route path="*" element={<RedirectToHome />} />
        </Routes>
      </Main>

      <Tabs>
        <AnimateSharedLayout>
          <TabsStack>
            {tabs.map((tab) => (
              <Tab
                {...tab}
                key={tab.to}
                baseColor={theme.colors.black}
                activeColor={theme.colors['secondary-dark-1']}
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
  const [fullTo, setFullTo] = React.useState(to);
  const resolvedLocation = useResolvedPath(to);
  const isActive = location.pathname.includes(resolvedLocation.pathname);
  const Icon = icon;

  // Make sure tab link always points to the latest (potentially) nested route
  React.useEffect(() => {
    if (isActive) setFullTo(location.pathname);
  }, [location, isActive]);

  return (
    <TabLink to={fullTo}>
      <Icon
        size={24}
        {...iconProps}
        color={isActive ? activeColor : baseColor}
      />
      {isActive && <TabIndicator />}
    </TabLink>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.colors.white};
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

const TabScreen = styled.div`
  min-height: calc(100vh - ${TAB_HEIGHT}px);
  background-color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.spacing.normal};
  padding-top: max(${(p) => p.theme.spacing.normal}, env(safe-area-inset-top));
  padding-bottom: ${(p) => p.theme.spacing.large};
  position: relative;
  opacity: 0;
  animation: ${animations.fadeIn} 200ms ease-in forwards;
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
  background-color: ${(p) => p.theme.colors['secondary-light-3']};
  border-radius: 8px;
  z-index: -1;
`;

export default TabNavigator;
