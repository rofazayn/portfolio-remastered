import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
