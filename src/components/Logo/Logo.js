import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';

const SLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: 'Alegreya';
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  span {
    color: ${({ theme }) => theme.colors.vein};
  }
`;

const Logo = () => {
  return (
    <Link to='/home'>
      <SLogo>
        RZ
        {/* <span>.</span> */}
      </SLogo>
    </Link>
  );
};

export default Logo;
