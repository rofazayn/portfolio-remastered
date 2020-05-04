import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
      /* display: none; */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    /* transition: color ease 400ms; */
    /* transition: background-color ease 400ms; */
  }

  html,
  body {
    /* min-height: 100%; */
    /* overflow-x: hidden; */
    background: ${({ theme }) => theme.colors.background};
    /* scroll-behavior: smooth; */
    scroll-padding-block-start: 60px;
  }

  .no-sroll {
      overflow: hidden;
      height: 100%;
  }

  #root {
    height: 100%;
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
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

  .custom-button {
    font-weight: 700 !important;
    letter-spacing: 1px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    svg {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 1366px) {
      font-size: 0.8rem !important; 
      padding: .5 .75rem !important;
      svg {
        width: 18px;
        height: 18px;
      }      
    }

    @media (max-width: 768px) {
      font-size: .75rem;
      font-size: 0.77rem !important; 
      padding: .4 .55rem !important;
      svg {
        width: 16px;
        height: 16px;
      }      
    }
    
  }

  .App {
    visibility: hidden;
    min-height: 100%;
    position: relative;
    z-index: 0;
  }
`;

export default GlobalStyle;
