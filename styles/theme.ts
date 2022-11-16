import { DefaultTheme } from 'styled-components';

export const color = {
  primary: '#FFCAB4',
  hover: '#FF8F5F',
  secondary: '#78E590',
  background: '#FFFBF9',
  black: '#303030',
} as const;

export type ColorType = typeof color;

const theme: DefaultTheme = {
  color,
};

export default theme;
