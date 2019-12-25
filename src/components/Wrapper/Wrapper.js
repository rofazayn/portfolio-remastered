import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  @media (max-width: 1200px) {
    padding-bottom: 180px;
  }
  @media (max-width: 992px) {
    padding-bottom: 150px;
  }
  @media (max-width: 768px) {
    padding-bottom: 120px;
  }
  @media (max-width: 576px) {
    padding-bottom: 120px;
  }
`;

const Wrapper = ({ children, ...otherProps }) => {
  return <SWrapper {...otherProps}>{children}</SWrapper>;
};

export default Wrapper;
