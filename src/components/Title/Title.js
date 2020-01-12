import React from 'react';
import styled, { css } from 'styled-components';

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
      /* visibility: hidden; */
    }
  }

  ${props =>
    props.itemTitle &&
    css`
      font-size: 1.5rem;
      letter-spacing: 0px;
      color: ${({ theme }) => theme.colors.primary};
      font-family: 'Alegreya';
      font-weight: 900;
      margin-bottom: 1.2rem;
      .line-wrapper {
        position: relative;
        overflow: hidden;
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
      @media (max-width: 1200px) {
        font-size: 1.4rem;
      }
      @media (max-width: 992px) {
        font-size: 1.3rem;
      }
      @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
      }
      @media (max-width: 576px) {
        font-size: 1.1rem;
      }
    `}

  ${props =>
    props.sectionTitle &&
    css`
      font-size: 1.7rem;
      letter-spacing: 0px;
      .line-wrapper {
        position: relative;
        overflow: hidden;
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
      @media (max-width: 1200px) {
        font-size: 1.6rem;
      }
      @media (max-width: 992px) {
        font-size: 1.5rem;
      }
      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
      @media (max-width: 576px) {
        font-size: 1.3rem;
      }
    `}

  ${props =>
    props.pageTitle &&
    css`
      font-size: 1rem;
      font-weight: 900;
      font-family: 'Alegreya';
      text-transform: uppercase;
      letter-spacing: 1px;
      color: gray;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      @media (max-width: 1200px) {
        font-size: 0.95rem;
      }
      @media (max-width: 992px) {
        font-size: 0.9rem;
      }
      @media (max-width: 768px) {
        font-size: 0.85rem;
        margin-bottom: 0.7rem;
      }
      @media (max-width: 576px) {
        font-size: 0.8rem;
      }
      .line-wrapper {
        position: relative;
        overflow: hidden;
        .line {
          max-width: 480px;
          visibility: visible;
        }
      }
    `}
`;

const Title = ({ children, ...otherProps }) => {
  return <STitle {...otherProps}>{children}</STitle>;
};

export default Title;
