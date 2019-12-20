import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  padding: 200px 0;
  min-height: 100vh;
  position: relative;
  background: black;
  display: flex;
`;

const Wrapper = ({ children, ...otherProps }) => {
  return <SWrapper {...otherProps}>{children}</SWrapper>;
};

export default Wrapper;
