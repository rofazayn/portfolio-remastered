import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLogo = styled.span`
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 16px;
  padding: 0.5rem 0;
  width: 30%;
  letter-spacing: 0.1rem;
  mix-blend-mode: difference;
  color: white;
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
