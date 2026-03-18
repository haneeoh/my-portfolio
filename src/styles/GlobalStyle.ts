// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #faf8f5;
    color: #111;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  a { text-decoration: none; color: inherit; cursor: pointer; }
  button { border: none; background: none; padding: 0; cursor: pointer; outline: none; font-family: inherit; }
  ul, li { list-style: none; }
  img { max-width: 100%; display: block; -webkit-user-drag: none; }

  ::selection { background-color: #00D1B2; color: #fff; }
`;

export default GlobalStyle;