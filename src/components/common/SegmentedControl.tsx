import React from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Text from './Text';

interface Props {
  segments: { label: string; onClick: () => any }[];
  active: number;
}

const SegmentedControl = ({ segments = [], active = 0 }: Props) => {
  return (
    <Wrapper>
      <AnimateSharedLayout>
        {segments.map(({ label, onClick }, index) => (
          <Segment
            key={label}
            label={label}
            isActive={active === index}
            onClick={onClick}
          />
        ))}
      </AnimateSharedLayout>
    </Wrapper>
  );
};

const Segment = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <SegmentButton onClick={onClick}>
      <Text variant="caption" as="span" color={isActive ? 'black' : 'grey-70'}>
        {label}
      </Text>
      {isActive && <SegmentIndicator />}
    </SegmentButton>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(p) => p.theme.colors['grey-10']};
  border-radius: 8px;
  z-index: 0;
`;

const SegmentButton = styled.button`
  padding: ${(p) => p.theme.spacing.small};
  flex: 1;
  position: relative;

  & > span {
    z-index: 1;
  }
`;

const SegmentIndicator = styled(motion.div).attrs({
  layoutId: 'segment-indicator',
})`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 4px;
  right: 4px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadows.small};
  border-radius: 6px;
  z-index: -1;
`;

export default SegmentedControl;
