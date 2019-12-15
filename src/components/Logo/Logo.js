import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLogo = styled.a`
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.1rem;
  width: 30%;
`;

const Logo = () => {
  return (
    <Link to='/'>
      <SLogo>rofazayn.</SLogo>
    </Link>
  );
};

export default Logo;
