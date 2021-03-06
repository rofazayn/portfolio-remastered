import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';
import NavbarStatic from '../NavbarStatic/NavbarStatic';

const SNavbar = styled.nav`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  /* background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background} 89%,
    ${({ theme }) => theme.colors.backgroundLowOpacity} 100%
  ); */

  transition: top ease 400ms;
  .navbar {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 1500px; */
    margin: 0 auto;
    max-width: 1920px;
    @media (max-width: 767px) {
      padding: 1rem;
    }
  }
`;

const Navbar = () => {
  var prevScrollpos = window.pageYOffset + 10;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <SNavbar id='navbar'>
      <div className='navbar'>
        <Logo />
        {/* <Pagination /> */}
        <NavbarStatic />
        <NavOptions />
      </div>
    </SNavbar>
  );
};

export default Navbar;
