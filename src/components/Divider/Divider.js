import React from 'react';
import styled from 'styled-components';

const SDivider = styled.a`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .line {
    width: ${({ vertical }) => (vertical ? '1px' : '40px')};
    height: ${({ vertical }) => (vertical ? '20px' : '1px')};
    background: white;
    opacity: 25%;
  }
`;

const Divider = () => {
  return (
    <SDivider>
      <span className='line'></span>
    </SDivider>
  );
};

export default Divider;
