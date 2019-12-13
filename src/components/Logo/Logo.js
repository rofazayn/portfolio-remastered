import React from 'react';
import styled from 'styled-components';

const SLogo = styled.a`
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.1rem;
  width: 30%;
`;

const Logo = () => {
  return <SLogo href='/'>rofazayn.</SLogo>;
};

export default Logo;
