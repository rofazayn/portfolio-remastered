import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';

const SLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  span {
    color: ${({ theme }) => theme.colors.vein};
  }
`;

const Logo = () => {
  return (
    <Link to='/home'>
      <SLogo>
        rofazayn<span>.</span>
      </SLogo>
    </Link>
  );
};

export default Logo;
