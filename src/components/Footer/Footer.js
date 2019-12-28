import React from 'react';
import styled from 'styled-components';
import Status from '../Status/Status';
import Social from '../Social/Social';

const SFooter = styled.footer`
  /* position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; */
  /* height: 100%; */
  background: ${({ theme }) => theme.colors.background};
  .footer {
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
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
