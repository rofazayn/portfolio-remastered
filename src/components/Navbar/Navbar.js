import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Pagination from '../Pagination/Pagination';
import NavOptions from '../NavOptions/NavOptions';

const SNavbar = styled.nav`
  z-index: 100;
  margin-top: 2%;
  height: 50px;
  width: 100%;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <SNavbar>
      <Logo />
      <Pagination />
      <NavOptions />
    </SNavbar>
  );
};

export default Navbar;
