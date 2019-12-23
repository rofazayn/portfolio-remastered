import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';

const SNavbar = styled.nav`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  .navbar {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
  }
`;

const Navbar = () => {
  return (
    <SNavbar>
      <div className='navbar'>
        <Logo />
        {/* <Pagination /> */}
        <NavOptions />
      </div>
    </SNavbar>
  );
};

export default Navbar;
