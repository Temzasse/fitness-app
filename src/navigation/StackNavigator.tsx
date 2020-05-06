import React from 'react';
import styled, { css } from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animations } from '../utils/styled';
import { useScrollRestoration } from '../utils/scroll';

type StackItem = {
  path: string;
  component: () => JSX.Element;
  disableAnimation?: boolean;
  disableScrollRestoration?: boolean;
};

interface Props {
  stack: StackItem[];
}

const StackRoute = (item: StackItem) => {
  const location: Location = useLocation();

  useScrollRestoration(
    `stack-${location.pathname}`,
    !!item.disableScrollRestoration
  );

  return (
    <StackScreen animate={!item.disableAnimation}>
      {<item.component />}
    </StackScreen>
  );
};

const StackNavigator: React.FC<Props> = ({ stack }) => {
  return (
    <Routes>
      {stack.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={<StackRoute {...item} />}
        />
      ))}
    </Routes>
  );
};

const StackScreen = styled.div<{ animate: boolean }>`
  background-color: ${(p) => p.theme.colors.white};
  ${(p) =>
    p.animate &&
    css`
      opacity: 0;
      animation: ${animations.fadeIn} 200ms ease-in forwards;
    `}
`;

export default StackNavigator;
