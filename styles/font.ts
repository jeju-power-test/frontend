import { createGlobalStyle } from 'styled-components';

const Font = createGlobalStyle`
@font-face {
  font-family: 'KotraHope';
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/KotraHope.woff2') format('woff2');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-display: swap;
  src: url('/assets/fonts/Pretendard.woff2') format('woff2');
}
`;

export default Font;
