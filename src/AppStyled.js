import styled from 'styled-components';

const SApp = styled.div`
  visibility: hidden;
  min-height: 100%;
  position: relative;
  z-index: 1;

  .title {
    font-size: 2.5rem;
    @media (max-width: 1200px) {
      font-size: 2.4rem;
    }
    @media (max-width: 992px) {
      font-size: 2.3rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    @media (max-width: 576px) {
      font-size: 1.8rem;
    }
  }

  .page-title {
      font-size: 1rem;
    font-weight: 900;
    font-family: 'Alegreya';
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    /* color: ${({ theme }) => theme.colors.secondary}; */
    color: gray;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
  }

  .paragraph {
    font-size: 1.1rem;
    line-height: 1.8;
    word-wrap: break-word;
    overflow-wrap: break-word;

    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    @media (max-width: 1200px) {
      font-size: 1.05rem;
    }
    @media (max-width: 992px) {
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;

export default SApp;
