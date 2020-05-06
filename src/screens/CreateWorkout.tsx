import React from 'react';
import styled from 'styled-components';
import { Stack, Spacer } from 'styled-layout';
import { FiImage, FiRepeat, FiChevronRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Text, Button, Input, LabeledInput } from '../components/common';
import { BackButtonFab } from '../navigation/BackButton';
import { useAppState } from '../models';
import { MdTimer, MdDirectionsRun } from 'react-icons/md';

const CreateWorkout = () => {
  const navigate = useNavigate();
  const { state, actions } = useAppState();
  const { formState, new: workout, isNewValid: isValid } = state.workouts;
  const isSaving = formState === 'saving';
  const canSave = isValid && formState === 'editing';

  return (
    <>
      <BackButtonFab onClick={actions.workouts.clearNewWorkout} />

      <Stack>
        <HeaderImageLink to="select-photo">
          <HeaderImageWrapper>
            {workout.image ? (
              <HeaderImage
                src={workout.image.urls.regular}
                alt={workout.image.alt}
              />
            ) : (
              <AddImageStack spacing="small" align="center" justify="center">
                <FiImage size={40} />
                <Text variant="caption" color="grey-60">
                  Lisää kuva
                </Text>
              </AddImageStack>
            )}
          </HeaderImageWrapper>
        </HeaderImageLink>

        <Input
          placeholder="Syötä nimi"
          variant="title-1"
          value={workout.name}
          onChange={(e) =>
            actions.workouts.updateNewWorkout({ name: e.target.value })
          }
        />

        <LabeledInput
          label="Kierrokset"
          icon={FiRepeat}
          placeholder="Numero (esim. 1 tai 3)"
          value={workout.sets}
          type="number"
          min="1"
          onChange={(e) =>
            actions.workouts.updateNewWorkout({ sets: Number(e.target.value) })
          }
        />

        <LabeledInput
          label="Kesto"
          icon={MdTimer}
          placeholder="Teksti (esim. 30min tai 1h)"
          value={workout.duration}
          onChange={(e) =>
            actions.workouts.updateNewWorkout({ duration: e.target.value })
          }
        />

        <ExerciseSelectorLink to="select-exercises">
          <LabelBlock>
            <IconWrapper>
              <MdDirectionsRun size={18} />
            </IconWrapper>

            <Spacer axis="x" size="small" />

            <Text variant="body" as="span">
              Harjoitteet
            </Text>
          </LabelBlock>

          <Stack axis="x" spacing="xsmall" align="center">
            {!!workout.exercises?.length && (
              <Text variant="body" as="span">
                Valittu {workout.exercises.length}
              </Text>
            )}
            <LinkIcon size={16} />
          </Stack>
        </ExerciseSelectorLink>

        <Spacer size="large" />

        <Button
          text="Lisää harjoitus"
          state={isSaving ? 'loading' : canSave ? 'initial' : 'disabled'}
          onClick={() => actions.workouts.saveNewWorkout(navigate)}
        />
      </Stack>
    </>
  );
};

const HeaderImageLink = styled(Link)`
  margin-top: -${(p) => p.theme.spacing.normal};
  margin-left: -${(p) => p.theme.spacing.normal};
  margin-right: -${(p) => p.theme.spacing.normal};
`;

const HeaderImageWrapper = styled.div`
  height: 200px;
  background-color: ${(p) => p.theme.colors['grey-10']};
`;

const HeaderImage = styled.img`
  display: block;
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const AddImageStack = styled(Stack)`
  width: 100vw;
  height: 100%;
  color: ${(p) => p.theme.colors['grey-50']};

  &:active {
    background-color: ${(p) => p.theme.colors['grey-20']};
  }
`;

const ExerciseSelectorLink = styled(Link)`
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors['grey-20']};
  padding: ${(p) => p.theme.spacing.small};
  padding-left: ${(p) => p.theme.spacing.normal};
  padding-right: ${(p) => p.theme.spacing.small};
  margin-left: -${(p) => p.theme.spacing.normal};
  margin-right: -${(p) => p.theme.spacing.normal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 56px;
`;

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: ${(p) => p.theme.colors['primary-light-3']};
  color: ${(p) => p.theme.colors['primary-dark-1']};
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkIcon = styled(FiChevronRight)`
  color: ${(p) => p.theme.colors['grey-60']};
`;

export default CreateWorkout;
