import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
