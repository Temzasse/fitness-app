import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { IoIosRadioButtonOff, IoIosCheckmarkCircle } from 'react-icons/io';
import { Text } from '../components/common';
import { useAppState } from '../models';
import { Exercise } from '../models/exercise';
import { getCategoryName } from '../utils/formatting';
import BackButton from '../navigation/BackButton';

const ExerciseSelector = () => {
  const { state, actions } = useAppState();
  const exercisesByCategory = Object.entries(state.exercises.byCategory);
  const selectedIds = state.workouts.new.exercises || []; 

  return (
    <Stack>
      <BackButton />

      <ExerciseList>
        <Stack as="ul" dividers="grey-20" spacing="none">
          {exercisesByCategory.map(([category, exercises]) => (
            <React.Fragment key={category}>
              <StickyTitle>
                <Text variant="overline">
                  {getCategoryName(category as Exercise['category'])}
                </Text>
              </StickyTitle>

              {exercises.map((exercise) => (
                <ExerciseRow
                  key={exercise.id}
                  onClick={() =>
                    actions.workouts.toggleExerciseInNewWorkout(exercise.id)
                  }
                >
                  {exercise.name}
                  {selectedIds.includes(exercise.id) ? (
                    <CheckIcon size={24} />
                  ) : (
                    <UnCheckIcon size={24} />
                  )}
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
    margin-left: -${(p) => p.theme.spacing.normal} !important;
    margin-right: -${(p) => p.theme.spacing.normal} !important;
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
  margin-left: ${(p) => p.theme.spacing.normal} !important;
  width: calc(100% - ${(p) => p.theme.spacing.normal});
  padding: ${(p) => p.theme.spacing.normal} 0;
  padding-right: ${(p) => p.theme.spacing.normal};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckIcon = styled(IoIosCheckmarkCircle)``;

const UnCheckIcon = styled(IoIosRadioButtonOff)``;

export default ExerciseSelector;
