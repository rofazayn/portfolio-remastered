import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  height: 100%;
  min-height: 1000px;
  position: relative;
`;

const Wrapper = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
