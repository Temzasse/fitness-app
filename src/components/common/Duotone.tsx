import styled from 'styled-components';
import { motion } from 'framer-motion';

const Duotone = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    opacity: 0.7;
    background-color: ${(p) => p.theme.colors.primary};
    content: '';
    display: block;
    mix-blend-mode: color;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::after {
    background-color: ${(p) => p.theme.colors['secondary-dark-3']};
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default Duotone;
