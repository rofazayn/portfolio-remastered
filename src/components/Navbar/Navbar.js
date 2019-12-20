import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';

const SNavbar = styled.nav`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
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
