import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { Text, SegmentedControl } from '../components/common';
import { useAppState } from '../models';
import { groupedExercises } from '../models/mock-data';

const Catalog = () => {
  const { state } = useAppState();
  const exercises = Object.values(state.exercises.items);

  function handleSegmentClick() {
    console.log('> Segment clicked');
  }

  return (
    <Stack>
      <Text variant="title-1">Harjoitukset</Text>

      <SegmentedControl
        segments={[
          { label: 'Kaikki', onClick: handleSegmentClick },
          { label: 'Sisä', onClick: handleSegmentClick },
          { label: 'Ulko', onClick: handleSegmentClick },
        ]}
      />

      <ExerciseList>
        <Stack as="ul" dividers="grey-20" spacing="none">
          {Object.entries(groupedExercises).map(([group, exercises]) => (
            <React.Fragment key={group}>
              <StickyTitle>
                <Text variant="overline">{group}</Text>
              </StickyTitle>

              {exercises.map((exercise) => (
                <ExerciseRow key={exercise}>
                  <Text variant="body">{exercise}</Text>
                </ExerciseRow>
              ))}
            </React.Fragment>
          ))}
        </Stack>
      </ExerciseList>
    </Stack>
  );
};

// NOTE: for some reason the as="ul" prop breaks the Stack component
// so we need to apply the styles via this extra div
const ExerciseList = styled.div`
  width: 100%;

  ul {
    margin-left: -${(p) => p.theme.spacing.normal};
    margin-right: -${(p) => p.theme.spacing.normal};
  }
`;

const StickyTitle = styled.li`
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1;
  padding: ${(p) => p.theme.spacing.xsmall} ${(p) => p.theme.spacing.normal};
  background-color: ${(p) => p.theme.colors['grey-10']};
`;

const ExerciseRow = styled.li`
  padding: ${(p) => p.theme.spacing.normal} 0;
  margin-left: ${(p) => p.theme.spacing.normal};
  width: calc(100% - ${(p) => p.theme.spacing.normal});
`;

export default Catalog;
