import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1440px) {
    max-width: 1240px;
  }
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
