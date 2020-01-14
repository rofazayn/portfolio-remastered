import React from 'react';
import styled from 'styled-components';

const SButton = styled.div`
  position: relative;
  .background-layer {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: ${({ theme }) => theme.colors.vein};
  }
  .button-layer {
    white-space: nowrap;
    width: 100%;
    display: flex;
    height: 100%;
    padding: ${({ navButton }) => (navButton ? '.5rem' : '.9rem 1rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    overflow: hidden;
    background: ${({ navButton, theme }) =>
      navButton ? 'none' : theme.colors.vein};
    color: ${({ navButton, theme }) =>
      navButton ? theme.colors.primary : theme.colors.background};
    font-family: 'Lato';
    cursor: pointer;
    font-size: 0.9rem;
    @media (max-width: 1200px) {
      font-size: 0.85rem;
    }
    @media (max-width: 992px) {
      font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
    @media (max-width: 1440px) {
      padding: ${({ navButton }) => (navButton ? '.25rem' : '.7rem .8rem')};
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
      background: ${({ theme }) => theme.colors.primary};
      /* color: ${({ navButton, theme }) =>
        navButton ? theme.colors.primary : theme.colors.primary}; */
    }
  }
`;

const Button = React.forwardRef((props, ref) => {
  return (
    <SButton {...props}>
      {props.navButton ? null : (
        <div className='background-layer' ref={ref}></div>
      )}
      <button className='button-layer' {...props}>
        {props.children}
      </button>
    </SButton>
  );
});

export default Button;
