import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const SPage = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  &.page-enter {
    opacity: 0;
  }
  &.page-enter-active {
    opacity: 1;
    transition: opacity 650ms ease-in 650ms;
  }
  &.page-exit {
    opacity: 1;
  }
  &.page-exit-active {
    opacity: 0;
    transition: opacity 650ms ease-out;
  }
`;

const Page = ({ children, ...otherProps }) => {
  useEffect(() => {
    gsap.set('.page', { visibility: 'visible' });
  });
  return (
    <SPage className='page' {...otherProps}>
      {children}
    </SPage>
  );
};

export default Page;
