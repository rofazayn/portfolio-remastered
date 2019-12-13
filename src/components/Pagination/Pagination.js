import React from 'react';
import styled from 'styled-components';

const SPagination = styled.a`
  font-size: 14px;
  color: gray;
  span {
    color: white;
    font-size: 20px;
  }
`;

const Pagination = () => {
  return (
    <SPagination>
      <span>1</span> - 5
    </SPagination>
  );
};

export default Pagination;
