import { keyframes } from 'styled-components';

export const animations = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  slideUp: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  `,
  slideDown: keyframes`
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  `,
  slideDownAndFadeIn: keyframes`
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  `,
};
