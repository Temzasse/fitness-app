import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { Photo, getRandomPhotos } from '../utils/photos';
import { animations } from '../utils/styled';
import { Text, Duotone } from '../components/common';
import { useAppState } from '../models';
import { useBottomSheet } from '../components/BottomSheet';

const PhotoSelector = () => {
  const bottomSheet = useBottomSheet();
  const { actions } = useAppState();
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  function handlePhotoClick(photo: Photo) {
    actions.workouts.updateNewWorkout({ image: photo });
    bottomSheet.close();
  }

  React.useEffect(() => {
    getRandomPhotos()
      .then(setPhotos)
      .catch((error) => console.log('> Failed to fetch photos', error));
  }, []);

  return (
    <Wrapper>
      <Stack>
        <Text variant="title-2">Valitse kuva</Text>

        <Stack axis="x" spacing="xsmall" fluid>
          {photos.map((photo, index) => (
            <PhotoCell
              key={photo.id}
              index={index}
              onClick={() => handlePhotoClick(photo)}
            >
              <PhotoWrapper>
                <PhotoImg src={photo.urls.thumb} />
              </PhotoWrapper>
            </PhotoCell>
          ))}
        </Stack>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: ${(p) => p.theme.spacing.normal};
  overflow: auto;
`;

const PhotoCell = styled.button<{ index: number }>`
  opacity: 0;
  width: calc(50% - ${(p) => p.theme.spacing.xsmall});
  height: 100px;
  animation: ${animations.fadeIn} 100ms ease forwards;
  animation-delay: ${(p) => p.index * 100}ms;
  border-radius: 4px;
  overflow: hidden;

  &:active {
    filter: brightness(0.7);
  }
`;

const PhotoWrapper = styled(Duotone)`
  width: 100%;
  height: 100%;
`;

const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default PhotoSelector;
