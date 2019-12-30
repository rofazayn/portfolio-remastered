import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    transition: color ease 400ms;
    transition: background-color ease 400ms;
  }

  html,
  body {
    min-height: 100%;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    /* scroll-behavior: smooth; */
  }

  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Lato', 'Alegreya', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    color: inherit;
    outline: none;
  }

  .App {
    visibility: hidden;
    min-height: 100%;
    position: relative;
    z-index: 1;
    .viewport {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    .scroll-container {
      position: absolute;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      z-index: 1;
      width: 100%;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
  }
`;

export default GlobalStyle;
