import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 1440px) {
    max-width: 1240px;
  }
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
