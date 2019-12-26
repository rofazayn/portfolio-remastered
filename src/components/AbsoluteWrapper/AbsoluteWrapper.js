import React from 'react';
import styled from 'styled-components';

const SAbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
`;

const AbsoluteWrapper = ({ children }) => {
  return <SAbsoluteWrapper>{children}</SAbsoluteWrapper>;
};

export default AbsoluteWrapper;
