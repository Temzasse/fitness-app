import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { Link, useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Text, SegmentedControl, Fab } from '../components/common';
import { useAppState } from '../models';
import { Exercise } from '../models/exercise';
import { getCategoryName } from '../utils/formatting';
import TitledNavHeader from '../navigation/TitledNavHeader';

const Exercises = () => {
  const navigate = useNavigate();
  const { state } = useAppState();
  const exercisesByCategory = Object.entries(state.exercises.byCategory);
  const [activeSegment, setActiveSegment] = React.useState(0);

  function filterByEnvironment(exercise: Exercise) {
    if (activeSegment === 0) return true;
    if (activeSegment === 1 && exercise.environment !== 'outdoor') return true;
    if (activeSegment === 2 && exercise.environment !== 'indoor') return true;
    return false;
  }

  return (
    <>
      <TitledNavHeader title="Harjoitteet" />

      <Spacer size="medium" />

      <Stack>
        <SegmentedControl
          active={activeSegment}
          segments={[
            { label: 'Kaikki', onClick: () => setActiveSegment(0) },
            { label: 'Sisä', onClick: () => setActiveSegment(1) },
            { label: 'Ulko', onClick: () => setActiveSegment(2) },
          ]}
        />

        <ExerciseList>
          <Stack as="ul" dividers="grey-20" spacing="none">
            {exercisesByCategory.map(([category, exercises]) => (
              <React.Fragment key={category}>
                <StickyTitle>
                  <Text variant="overline">
                    {getCategoryName(category as Exercise['category'])}
                  </Text>
                </StickyTitle>

                {exercises.filter(filterByEnvironment).map((exercise) => (
                  <ExerciseRow key={exercise.id}>
                    <ExerciseLink to={exercise.id}>
                      {exercise.name}
                    </ExerciseLink>
                  </ExerciseRow>
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </ExerciseList>

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Stack>

      <Fab icon={MdAdd} onClick={() => navigate('create')} />
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

// NOTE: for some reason the as="ul" prop breaks the Stack component
// so we need to apply the styles via this extra div
const ExerciseList = styled.div`
  width: 100%;

  ul {
    margin-left: -${(p) => p.theme.spacing.normal} !important;
    margin-right: -${(p) => p.theme.spacing.normal} !important;
  }
`;

const StickyTitle = styled.li`
  position: sticky;
  top: 50px;
  top: calc(50px + env(safe-area-inset-top));
  width: 100%;
  z-index: 1;
  padding: ${(p) => p.theme.spacing.xsmall} ${(p) => p.theme.spacing.normal};
  background-color: ${(p) => p.theme.colors['grey-10']};
`;

const ExerciseRow = styled.li`
  margin-left: ${(p) => p.theme.spacing.normal} !important;
  width: calc(100% - ${(p) => p.theme.spacing.normal});
`;

const ExerciseLink = styled(Link)`
  ${(p) => p.theme.typography.body};
  display: block;
  padding: ${(p) => p.theme.spacing.normal} 0;

  &:active {
    opacity: 0.7;
  }
`;

export default Exercises;
