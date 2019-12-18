import React from 'react';
import styled from 'styled-components';

const SButton = styled.div`
  position: relative;
  /* overflow: hidden; */
  .background-layer {
    position: absolute;
    top: 0;
    right: -20%;
    margin: 0 auto;
    width: 120%;
    height: 100%;
    z-index: 3;
    background: tomato;
  }
  .button-layer {
    white-space: nowrap;
    width: 100%;
    display: flex;
    height: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    overflow: hidden;
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
  }
`;

const Button = React.forwardRef((props, ref) => {
  return (
    <SButton {...props}>
      {props.navButton ? null : (
        <div className='background-layer' ref={ref}></div>
      )}
      <div className='button-layer'>{props.children}</div>
    </SButton>
  );
});

export default Button;
