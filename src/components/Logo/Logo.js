import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';

const SLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 18px;
  }
`;

const Logo = () => {
  return (
    <Link to='/home'>
      <SLogo>
        <LogoSvg />
      </SLogo>
    </Link>
  );
};

export default Logo;
