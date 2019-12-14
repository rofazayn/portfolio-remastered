import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;

const Wrapper = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
