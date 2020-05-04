import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { Text } from '../components/common';

/*
Smart Workout™️
1. Select environment: 'indoor' | 'outdoor' | 'any'
2. Select category: 'aerobic' | 'strength' | 'interval' | 'flexibility' | 'other'
3. Select tags?
*/

const Home = () => {
  return (
    <Stack>
      <Text variant="title-1">Treenaa</Text>
      <Box />
      <Text variant="title-2">Treenaa uudestaan</Text>
      <ScrollerStack axis="x">
        <Box w="50vw" />
        <Box w="50vw" />
        <Box w="50vw" />
        <Box w="50vw" />
      </ScrollerStack>
    </Stack>
  );
};

const Box = styled.div<{ w?: string }>`
  height: 200px;
  width: ${(p) => p.w || '100%'};
  background-color: ${(p) => p.theme.colors['grey-20']};
  border-radius: 8px;
  flex: none;
`;

const ScrollerStack = styled(Stack)`
  width: 100%;
  overflow: auto;
`;

export default Home;
