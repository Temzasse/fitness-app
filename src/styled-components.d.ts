import 'styled-components';
import { MediaQuery } from 'styled-layout/dist/types';
import { css } from 'styled-components';

declare module 'styled-components' {
  interface Breakpoints {
    sm: { min: number; max: number };
    md: { min: number; max: number };
    lg: { min: number; max: number };
    xl: { min: number; max: number };
    // Variants
    mdDown: { max: number };
    mdUp: { min: number };
    lgDown: { max: number };
    lgUp: { min: number };
  }

  export interface DefaultTheme {
    colors: {
      primary: string;
      'primary-dark-1': string;
      'primary-dark-2': string;
      'primary-dark-3': string;
      'primary-light-1': string;
      'primary-light-2': string;
      'primary-light-3': string;
      divider: string;
      'grey-10': string;
      'grey-20': string;
      'grey-30': string;
      'grey-40': string;
      'grey-50': string;
      'grey-60': string;
      'grey-70': string;
      'grey-80': string;
      'grey-90': string;
      black: string;
      white: string;
    };
    spacing: {
      none: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      normal: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      default: string;
    };
    typography: {
      'title-1': ReturnType<typeof css>;
      'title-2': ReturnType<typeof css>;
      'title-3': ReturnType<typeof css>;
      body: ReturnType<typeof css>;
    };
    breakpoints: Breakpoints;
    media: MediaQuery<Breakpoints>;
  }
}
