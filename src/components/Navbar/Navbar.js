import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';

const SNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  z-index: 1000;
  margin-top: 1.5rem;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <SNavbar>
      <Logo />
      {/* <Pagination /> */}
      <NavOptions />
    </SNavbar>
  );
};

export default Navbar;
