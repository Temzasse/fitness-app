import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

type StackItem = {
  path: string;
  component: () => JSX.Element;
};

interface Props {
  stack: StackItem[];
}

const StackNavigator: React.FC<Props> = ({ stack }) => {
  return (
    <AnimatePresence>
      <Routes>
        {stack.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<StackScreen>{<item.component />}</StackScreen>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const StackScreen = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  background-color: ${(p) => p.theme.colors.white};
`;

export default StackNavigator;
