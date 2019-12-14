import React from 'react';
import styled from 'styled-components';

const SStatus = styled.div`
  font-size: 14px;
  span {
    color: green;
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
