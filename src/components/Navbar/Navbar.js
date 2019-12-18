import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';

const SNavbar = styled.nav`
  padding: 0 2rem;
  margin-top: 1.5rem;
  height: 50px;
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
