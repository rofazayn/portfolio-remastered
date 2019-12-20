import React from 'react';
import styled from 'styled-components';

const SButton = styled.div`
  position: relative;
  /* overflow: hidden; */
  .background-layer {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: ${({ theme }) => theme.colors.primary};
  }
  .button-layer {
    white-space: nowrap;
    width: 100%;
    display: flex;
    height: 100%;
    padding: ${({ navButton }) => (navButton ? '.5rem' : '.9rem 1.5rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    overflow: hidden;
    background: ${({ navButton, theme }) =>
      navButton ? 'none' : theme.colors.vein};
    color: ${({ navButton, theme }) =>
      navButton ? theme.colors.primary : theme.colors.primary};
    cursor: pointer;
    @media (max-width: 1440px) {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
    transition: all ease-in-out 250ms;
    .icon {
      margin-inline-end: 1.25rem;
      transform: rotate(45deg) translateY(1px);
      svg {
        width: 14px;
        height: 14px;
        stroke-width: 4px;
      }
    }
    &:hover {
      color: ${({ navButton, theme }) =>
        navButton ? theme.colors.vein : theme.colors.background};
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
