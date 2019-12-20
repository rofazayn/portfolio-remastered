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
  @media (max-width: 1200px) {
    padding-left: 0.75rem;
  }
  span {
    color: tomato;
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
