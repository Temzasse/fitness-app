import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import BackButton from './BackButton';

interface Props {
  title: string;
}

const NavHeader: React.FC<Props> = ({ title }) => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [50, 100], [0, 1]);

  return (
    <Wrapper>
      <Shadow style={{ opacity }} />
      <Content>
        <LeftButton />
        <Title style={{ opacity }}>{title}</Title>
        <RightButton />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 999;
  position: sticky;
  top: 0px;
  width: 100vw;
  margin-left: -${(p) => p.theme.spacing.normal};
  margin-right: -${(p) => p.theme.spacing.normal};
  margin-top: -${(p) => p.theme.spacing.normal};
  height: 50px;
  height: calc(50px + env(safe-area-inset-top));
`;

const Content = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 ${(p) => p.theme.spacing.normal};
  padding-top: env(safe-area-inset-top);
  background-color: ${(p) => p.theme.colors.white};
`;

const Shadow = styled(motion.div)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: ${(p) => p.theme.shadows.small};
`;

const LeftButton = styled(BackButton)`
  flex: 1;

  &:active {
    opacity: 0.7;
  }
`;

const Title = styled(motion.span)`
  ${(p) => p.theme.typography.caption};
  display: inline-block;
`;

const RightButton = styled.div`
  flex: 1;
`;

export default NavHeader;
