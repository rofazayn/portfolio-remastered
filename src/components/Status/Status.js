import React from 'react';
import styled from 'styled-components';

const SStatus = styled.div`
  font-size: 12px;
  color: gray;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  .status {
    color: white;
    font-weight: 700;
    @media (max-width: 1200px) {
      font-size: 0.7rem;
    }
  }
  .text {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const Status = () => {
  return (
    <SStatus>
      <p>
        <span className='text'>Status - </span>
        <span className='status'>Recruitable</span>
      </p>
    </SStatus>
  );
};

export default Status;
