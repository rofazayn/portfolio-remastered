import React from 'react';
import styled from 'styled-components';
import Status from '../Status/Status';
import Social from '../Social/Social';

const SFooter = styled.footer`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  background: black;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <SFooter>
      <Status />
      <Social />
    </SFooter>
  );
};

export default Footer;
