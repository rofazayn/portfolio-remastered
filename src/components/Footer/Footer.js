import React from 'react';
import styled from 'styled-components';
import Status from '../Status/Status';
import Social from '../Social/Social';

const SFooter = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: 1200px) {
    padding: 1rem 1rem;
  }
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
