import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    word-break: break-all;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }

    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
  }
  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: none;
    background-color: ${color.background};
  }
  body {
    font-size: 1.6rem;
    font-family: 'KotraHope', sans-serif;
    background-color: ${color.background};
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }
  form {
    position: relative;
  }
  button,
  input,
  select,
  textarea {
    padding: 0;
    margin: 0;
    border-radius: 0;
    vertical-align: middle;
    background: transparent;
  }
  input,
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input:focus {
    outline: none;
  }
  textarea {
    resize: none;
    -webkit-appearance: none;
  }
  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;

    &:hover, &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
