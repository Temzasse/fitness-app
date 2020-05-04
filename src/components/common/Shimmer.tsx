import styled, { keyframes, DefaultTheme } from 'styled-components';

const shimmer = (theme: DefaultTheme) => keyframes`
  0% { background-color: ${theme.colors['grey-10']}; }
  50% { background-color: ${theme.colors['grey-30']}; }
  100% { background-color: ${theme.colors['grey-10']}; }
`;

const Shimmer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${(p) => p.theme.colors['grey-10']};
  animation: ${p => shimmer(p.theme)} 2s infinite;
`;

export default Shimmer;
