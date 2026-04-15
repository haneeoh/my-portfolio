import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #F9F7F4;
    color: #141414;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    outline: none;
  }

  ul, li { list-style: none; }
  img { max-width: 100%; display: block; }

  ::selection {
    background: #C05C3A;
    color: #F9F7F4;
  }
`;

export default GlobalStyle;
