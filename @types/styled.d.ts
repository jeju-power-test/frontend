import 'styled-components';
import theme, { ColorType } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends theme {
    color: ColorType;
  }
}
