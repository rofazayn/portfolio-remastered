import React from 'react';
import styled from 'styled-components';

const SButton = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  .icon {
    margin-inline-end: 1rem;
    transform: rotate(45deg) translateY(1px);
    svg {
      width: 14px;
      height: 14px;
    }
  }
  &:hover {
    color: gray;
  }
`;

const Button = ({ children }) => {
  return <SButton>{children}</SButton>;
};

export default Button;
