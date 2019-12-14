import React from 'react';
import styled from 'styled-components';

const SDivider = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  .line {
    width: ${({ vertical }) => (vertical ? '1px' : '40px')};
    height: ${({ vertical }) => (vertical ? '20px' : '1px')};
    background: white;
    opacity: 25%;
  }
`;

const Divider = props => {
  return (
    <SDivider {...props}>
      <span className='line'></span>
    </SDivider>
  );
};

export default Divider;
