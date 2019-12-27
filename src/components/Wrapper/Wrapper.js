import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { __RouterContext } from 'react-router-dom';

const SWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  /* min-height: 100vh; */
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
  const { location } = useContext(__RouterContext);

  const pageHeight = useSelector(state => state.ui.pageHeight);
  // Set wrapper height based on page height prop
  const [wrapperHeightUnits, setWrapperHeihtUnits] = useState(null);

  useEffect(() => {
    setWrapperHeihtUnits(pageHeight);
  }, [pageHeight, location]);

  return (
    <SWrapper
      {...otherProps}
      style={{ height: wrapperHeightUnits, minHeight: '100vh' }}
    >
      {children}
    </SWrapper>
  );
};

export default Wrapper;
