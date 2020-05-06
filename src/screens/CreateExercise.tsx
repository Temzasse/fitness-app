import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../models';
import NavHeader from '../navigation/NavHeader';

import {
  Button,
  Input,
  RadioGroup,
  TextArea,
  SegmentedControl,
} from '../components/common';
import { Exercise } from '../models/exercise';

const CreateExercise = () => {
  const [activeLevelDescription, setActiveLevelDescription] = React.useState(0);
  const navigate = useNavigate();
  const { state, actions } = useAppState();
  const { formState, new: exercise, isNewValid: isValid } = state.exercises;
  const isSaving = formState === 'saving';
  const canSave = isValid && formState === 'editing';

  const environmentOptions = [
    { label: 'Sisä', value: 'indoor' },
    { label: 'Ulko', value: 'outdoor' },
    { label: 'Kaikki', value: 'any' },
  ];

  const categoryOptions = [
    { label: 'Aerobinen', value: 'aerobic' },
    { label: 'Voima', value: 'strength' },
    { label: 'Intervalli', value: 'interval' },
    { label: 'Liikkuvuus', value: 'flexibility' },
    { label: 'Muu', value: 'other' },
  ];

  let levelDescriptionsKey: keyof Exercise['levelDescriptions'] = 'low';

  if (activeLevelDescription === 0) {
    levelDescriptionsKey = 'low';
  } else if (activeLevelDescription === 1) {
    levelDescriptionsKey = 'medium';
  } else if (activeLevelDescription === 2) {
    levelDescriptionsKey = 'high';
  }

  return (
    <Stack>
      <NavHeader title="Lisää harjoite" />

      <Input
        placeholder="Syötä nimi"
        variant="title-1"
        value={exercise.name}
        onChange={(e) =>
          actions.exercises.updateNewExercise({ name: e.target.value })
        }
      />

      <TextArea
        label="Kuvaus"
        placeholder="Kuvaile kuinka harjoite tulee suorittaa."
        value={exercise.description}
        onChange={(e) =>
          actions.exercises.updateNewExercise({ description: e.target.value })
        }
      />

      <TextArea
        rows={2}
        label="Kuvaus per vaikeustaso"
        placeholder={`Esim. "20 toistoa" tai "1min pito"`}
        value={exercise.levelDescriptions[levelDescriptionsKey]}
        onChange={(e) =>
          actions.exercises.updateNewExercise({
            levelDescriptions: {
              ...exercise.levelDescriptions,
              [levelDescriptionsKey]: e.target.value,
            },
          })
        }
      />

      <Spacer size="small" />

      <SegmentedControl
        active={activeLevelDescription}
        segments={[
          { label: '💪', onClick: () => setActiveLevelDescription(0) },
          { label: '💪💪', onClick: () => setActiveLevelDescription(1) },
          { label: '💪💪💪', onClick: () => setActiveLevelDescription(2) },
        ]}
      />

      <Spacer size="medium" />

      <RadioGroup
        label="Ympäristö"
        options={environmentOptions.map(({ label, value }) => ({
          label,
          value,
          checked: exercise.environment === value,
          onChange: (e: any) =>
            actions.exercises.updateNewExercise({
              environment: e.target.value,
            }),
        }))}
      />

      <Spacer size="medium" />

      <RadioGroup
        stacked
        label="Kategoria"
        options={categoryOptions.map(({ label, value }) => ({
          label,
          value,
          checked: exercise.category === value,
          onChange: (e: any) =>
            actions.exercises.updateNewExercise({
              category: e.target.value,
            }),
        }))}
      />

      <Spacer size="large" />

      <Button
        text="Lisää harjoite"
        state={isSaving ? 'loading' : canSave ? 'initial' : 'disabled'}
        onClick={() => actions.exercises.saveNewExercise(navigate)}
      />
    </Stack>
  );
};

export default CreateExercise;
