import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Stack } from 'styled-layout';
import { Text } from '../components/common';

interface Props {
  title: string;
}

const NavHeader: React.FC<Props> = ({ title }) => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [50, 100], [0, 1]);

  return (
    <Wrapper>
      <LeftButton to="..">
        <Stack axis="x" spacing="small" align="center">
          <BackIcon />
          <Text variant="caption">Back</Text>
        </Stack>
      </LeftButton>

      <Title style={{ opacity }}>{title}</Title>

      <RightButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  margin-top: -${(p) => p.theme.spacing.normal};
  padding: ${(p) => p.theme.spacing.normal} 0;
  z-index: 999;
  background-color: ${(p) => p.theme.colors.white};
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackIcon = styled(FiArrowLeft).attrs({ size: 18 })`
  color: ${(p) => p.theme.colors.black};
`;

const LeftButton = styled(Link)`
  &:active {
    opacity: 0.7;
  }
`;

const Title = styled(motion.span)`
  ${(p) => p.theme.typography.body};
  margin-left: auto !important;
  margin-right: auto !important;
  display: inline-block;
`;

const RightButton = styled.div`
  margin-left: auto !important;
`;

export default NavHeader;
