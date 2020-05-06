import { DefaultTheme, css } from 'styled-components';
import { createMediaQuery } from 'styled-layout';

const baseBreakpoints = {
  sm: { min: 0, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280, max: Infinity },
};

const breakpoints = {
  ...baseBreakpoints,
  mdDown: { max: baseBreakpoints.md.max },
  mdUp: { min: baseBreakpoints.md.min },
  lgDown: { max: baseBreakpoints.lg.max },
  lgUp: { min: baseBreakpoints.lg.min },
};

export const media = createMediaQuery(breakpoints);

export const theme: DefaultTheme = {
  colors: {
    'primary-light-3': '#fce4ec',
    'primary-light-2': '#f06292',
    'primary-light-1': '#ec407a',
    primary: '#e91e63',
    'primary-dark-1': '#c2185b',
    'primary-dark-2': '#ad1457',
    'primary-dark-3': '#880e4f',
    'secondary-light-3': '#C5CAE9',
    'secondary-light-2': '#9FA8DA',
    'secondary-light-1': '#5C6BC0',
    'secondary': '#3949AB',
    'secondary-dark-1': '#303F9F',
    'secondary-dark-2': '#283593',
    'secondary-dark-3': '#1A237E',
    divider: '#CBD5E0', // default for dividers
    'grey-10': '#F7FAFC',
    'grey-20': '#EDF2F7',
    'grey-30': '#E2E8F0',
    'grey-40': '#CBD5E0',
    'grey-50': '#A0AEC0',
    'grey-60': '#718096',
    'grey-70': '#4A5568',
    'grey-80': '#2D3748',
    'grey-90': '#1A202C',
    black: '#222',
    white: '#fff',
  },
  spacing: {
    none: '0px',
    xxsmall: '2px',
    xsmall: '4px',
    small: '8px',
    normal: '16px',
    default: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
    xxlarge: '64px',
  },
  typography: {
    'title-1': css`
      font-size: 28px;
      font-weight: 900;
      line-height: 1.22;
    `,
    'title-2': css`
      font-size: 22px;
      font-weight: 700;
      line-height: 1.3;
    `,
    'title-3': css`
      font-size: 20px;
      font-weight: 500;
      line-height: 1.25;
    `,
    body: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 1.3;
    `,
    caption: css`
      font-size: 14px;
      font-weight: 500;
      line-height: 1.35;
    `,
    overline: css`
      font-size: 12px;
      font-weight: 500;
      line-height: 1.65;
      text-transform: uppercase;
    `,
  },
  shadows: {
    small: '0px 1px 4px rgba(8, 35, 48, 0.2)',
    normal: '0px 4px 8px rgba(8, 35, 48, 0.24)',
    medium: '0px 8px 16px rgba(8, 35, 48, 0.2)',
    large: '0px 16px 24px rgba(8, 35, 48, 0.16)',
  },
  breakpoints,
  media,
};
