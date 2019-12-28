import styled from 'styled-components';

const SApp = styled.div`
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
    z-index: 1;
    width: 100%;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
`;

export default SApp;
