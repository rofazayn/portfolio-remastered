import React from 'react';
import styled from 'styled-components';

const STitle = styled.div`
  font-size: 2.5rem;
  @media (max-width: 1200px) {
    font-size: 2.4rem;
  }
  @media (max-width: 992px) {
    font-size: 2.3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Alegreya';
  font-weight: 900;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  .line-wrapper {
    position: relative;
    overflow: hidden;
    .line {
      max-width: 480px;
      visibility: hidden;
    }
  }
`;

const Title = ({ children }) => {
  return <STitle>{children}</STitle>;
};

export default Title;
