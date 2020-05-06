import React from 'react';
import styled from 'styled-components';
import { Stack } from 'styled-layout';
import { useNavigate } from 'react-router-dom';
import { Photo, getRandomPhotos } from '../utils/photos';
import { animations } from '../utils/styled';
import { Text } from '../components/common';
import NavHeader from '../navigation/NavHeader';
import { useAppState } from '../models';

const PhotoSelector = () => {
  const navigate = useNavigate();
  const { actions } = useAppState();
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  function handlePhotoClick(photo: Photo) {
    actions.workouts.updateNewWorkout({ image: photo });
    navigate('..');
  }

  React.useEffect(() => {
    getRandomPhotos()
      .then(setPhotos)
      .catch((error) => console.log('> Failed to fetch photos', error));
  }, []);

  return (
    <Stack>
      <NavHeader title="Choose photo" />

      <Text variant="title-2">Choose photo</Text>

      <Stack axis="x" spacing="xsmall" fluid>
        {photos.map((photo, index) => (
          <PhotoCell
            key={photo.id}
            index={index}
            onClick={() => handlePhotoClick(photo)}
          >
            <PhotoImg src={photo.urls.thumb} />
          </PhotoCell>
        ))}
      </Stack>
    </Stack>
  );
};

const PhotoCell = styled.button<{ index: number }>`
  opacity: 0;
  width: calc(50% - ${(p) => p.theme.spacing.xsmall});
  height: 100px;
  animation: ${animations.fadeIn} 100ms ease forwards;
  animation-delay: ${(p) => p.index * 100}ms;

  &:active {
    filter: brightness(0.7);
  }
`;

const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

export default PhotoSelector;
