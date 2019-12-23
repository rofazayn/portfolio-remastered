import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 1200px) {
    max-width: 992px;
  }
  @media (max-width: 992px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    max-width: 576px;
  }
  @media (max-width: 576px) {
    max-width: 400px;
  }
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
