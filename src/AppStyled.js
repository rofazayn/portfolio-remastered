import styled from 'styled-components';

const SApp = styled.div`
  visibility: hidden;
  min-height: 100%;
  position: relative;
  z-index: 1;

  .top {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-bottom: 5vh;
    @media (max-width: 992px) {
      padding-top: 100px;
      padding-bottom: 100px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
    .section {
      width: 100%;
    }
  }

  .mid {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @media (max-width: 992px) {
      padding-top: 100px;
      padding-bottom: 0;
    }
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .section {
    width: 100%;
  }
  .page {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
`;

export default SApp;
