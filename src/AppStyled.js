import styled from 'styled-components';

const SApp = styled.div`
  visibility: hidden;
  min-height: 100%;
  position: relative;
  z-index: 1;

  .title {
    font-size: 2.5rem;
    @media (max-width: 1200px) {
      font-size: 2.25rem;
    }
    @media (max-width: 992px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  .paragraph {
    font-size: 1.1rem;
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
