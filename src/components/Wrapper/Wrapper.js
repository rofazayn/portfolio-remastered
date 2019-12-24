import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  padding: 200px 0;
  min-height: calc(100vh - 80px);
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  @media (max-width: 1200px) {
    padding: 180px 0;
  }
  @media (max-width: 992px) {
    padding: 150px 0;
  }
  @media (max-width: 768px) {
    padding: 120px 0;
  }
  @media (max-width: 576px) {
    padding: 90px 0;
  }
`;

const Wrapper = ({ children, ...otherProps }) => {
  return <SWrapper {...otherProps}>{children}</SWrapper>;
};

export default Wrapper;
