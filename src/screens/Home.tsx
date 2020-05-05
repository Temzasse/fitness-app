import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { MdPlayArrow } from 'react-icons/md';
import { Text, Fab } from '../components/common';
import TitledNavHeader from '../navigation/TitledNavHeader';

/*
Smart Workout™️
1. Select environment: 'indoor' | 'outdoor' | 'any'
2. Select category: 'aerobic' | 'strength' | 'interval' | 'flexibility' | 'other'
3. Select tags?
*/

const Home = () => {
  function startSmartWorkout() {
    console.log('> Start workout');
  }

  return (
    <>
      <TitledNavHeader title="Treenaa" />

      <Spacer size="medium" />

      <Stack>
        <Box />
        <Text variant="title-2">Treenaa uudestaan</Text>
        <ScrollerStack axis="x">
          <Box w="50vw" />
          <Box w="50vw" />
          <Box w="50vw" />
          <Box w="50vw" />
        </ScrollerStack>
      </Stack>

      <Fab icon={MdPlayArrow} onClick={startSmartWorkout} />
    </>
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
