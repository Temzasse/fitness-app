import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Stack } from 'styled-layout';
import { Text } from '../components/common';

const BackButton: React.FC = (props) => {
  return (
    <Link to=".." {...props}>
      <Stack axis="x" spacing="small" align="center">
        <BackIcon />
        <Text variant="caption">Back</Text>
      </Stack>
    </Link>
  );
};

const BackIcon = styled(FiArrowLeft).attrs({ size: 18 })`
  color: ${(p) => p.theme.colors.black};
`;

export default BackButton;
