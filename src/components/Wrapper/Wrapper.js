import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  padding: 200px 0;
  min-height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  @media (max-width: 800px) {
    padding: 100px 0;
  }
`;

const Wrapper = ({ children, ...otherProps }) => {
  return <SWrapper {...otherProps}>{children}</SWrapper>;
};

export default Wrapper;
