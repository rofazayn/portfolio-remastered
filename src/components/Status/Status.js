import React from 'react';
import styled from 'styled-components';

const SStatus = styled.div`
  font-size: 12px;
  color: gray;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  span {
    color: white;
    font-weight: 700;
  }
`;

const Status = () => {
  return (
    <SStatus>
      <p>
        Status - <span>Recruitable</span>
      </p>
    </SStatus>
  );
};

export default Status;
