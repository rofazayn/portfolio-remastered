import React from 'react';
import styled from 'styled-components';
import Status from '../Status/Status';
import Social from '../Social/Social';

const SFooter = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  .footer {
    padding: 1rem 2rem;
    margin: 0 auto;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <SFooter>
      <div className='footer'>
        <Status />
        <Social />
      </div>
    </SFooter>
  );
};

export default Footer;
