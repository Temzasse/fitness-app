import React from 'react';
import styled from 'styled-components';
import { Text } from '../components/common';
import { useOvermind } from '../models';

const Profile = () => {
  const { state } = useOvermind();
  return (
    <div>
      <Text variant="title-1">{state.profile.name}</Text>
    </div>
  );
};

export default Profile;
