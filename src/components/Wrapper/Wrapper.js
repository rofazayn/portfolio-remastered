import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background: black;
  display: flex;
  height: 1000px;
`;

const Wrapper = ({ children, ...otherProps }) => {
  return <SWrapper {...otherProps}>{children}</SWrapper>;
};

export default Wrapper;
