import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Text } from '../components/common';

interface Props {
  title: string;
}

const TitledNavHeader: React.FC<Props> = ({ title }) => {
  const { scrollY } = useViewportScroll();
  const titleOpacity = useTransform(scrollY, [60, 100], [0, 1]);
  const opacity = useTransform(scrollY, [10, 60], [0, 1]);
  const y = useTransform(scrollY, [10, 60], [-100, 0]);

  return (
    <>
      <Wrapper style={{ y, opacity }}>
        <Title style={{ opacity: titleOpacity }}>{title}</Title>
      </Wrapper>

      <Text variant="title-1">{title}</Text>
    </>
  );
};

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 0 ${(p) => p.theme.spacing.normal};
  height: 50px;
  height: calc(50px + env(safe-area-inset-top));
  padding-top: env(safe-area-inset-top);
  z-index: 999;
  background-color: ${(p) => p.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows.small};
`;

const Title = styled(motion.span)`
  ${(p) => p.theme.typography.caption};
  display: inline-block;
`;

export default TitledNavHeader;
