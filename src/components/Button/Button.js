import React from 'react';
import styled from 'styled-components';

const SButton = styled.div`
  user-select: none;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  @media (max-width: 1440px) {
    font-size: 12px;
  }
  transition: all ease-in-out 250ms;
  .icon {
    margin-inline-end: 1rem;
    transform: rotate(45deg) translateY(1px);
    svg {
      width: 14px;
      height: 14px;
    }
  }
  color: tomato;
  &:hover {
    color: white;
  }
  &.nav-button {
    color: white !important;
    &:hover {
      color: tomato;
    }
  }
`;

const Button = ({ children }) => {
  return <SButton>{children}</SButton>;
};

export default Button;
