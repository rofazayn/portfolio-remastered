import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  // Large devices (desktops, less than 1200px)
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    max-width: 400px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 668px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 898px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
