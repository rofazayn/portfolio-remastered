import React from 'react';
import styled from 'styled-components';
import Status from '../Status/Status';
import Social from '../Social/Social';

const SFooter = styled.footer`
  margin-bottom: 2%;
  height: 50px;
  width: 100%;
  /* background-color: pink; */
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
