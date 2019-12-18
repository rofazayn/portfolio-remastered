import React from 'react';
import styled from 'styled-components';
import Status from '../Status/Status';
import Social from '../Social/Social';

const SFooter = styled.footer`
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  height: 50px;
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
