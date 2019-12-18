import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Wrapper = ({ children, ...otherProps }) => {
  return <SWrapper {...otherProps}>{children}</SWrapper>;
};

export default Wrapper;
