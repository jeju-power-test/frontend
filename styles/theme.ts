import { DefaultTheme } from 'styled-components';

export const color = {
  primary: '#FF8F5F',
  secondary: '#78E590',
  background: '#FFFBF9',
  black: '#303030',
  white: '#FFFFFF',
  alert: '#EB3F3F',
  gray: '#B3B3B3',
} as const;

export type ColorType = typeof color;

const theme: DefaultTheme = {
  color,
};

export default theme;
