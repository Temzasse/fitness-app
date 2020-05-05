import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { BackButton } from '../components/common';

interface Props {
  title: string;
}

const NavHeader: React.FC<Props> = ({ title }) => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [50, 100], [0, 1]);

  return (
    <Wrapper>
      <LeftButton />

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

const LeftButton = styled(BackButton)`
  flex: 1;

  &:active {
    opacity: 0.7;
  }
`;

const Title = styled(motion.span)`
  ${(p) => p.theme.typography.body};
`;

const RightButton = styled.div`
  flex: 1;
`;

export default NavHeader;
