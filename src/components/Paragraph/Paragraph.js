import React from 'react';
import styled from 'styled-components';

const SParagraph = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  max-width: 450px;
  @media (max-width: 1200px) {
    font-size: 1.05rem;
  }
  @media (max-width: 992px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  .text-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    width: 100%;
    .text {
      max-width: 450px;
      @media (max-width: 768px) {
        max-width: auto;
      }
    }
  }
`;

const Paragraph = ({ children }) => {
  return <SParagraph>{children}</SParagraph>;
};

export default Paragraph;
