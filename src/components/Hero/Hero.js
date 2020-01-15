import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import { IconButton } from '@material-ui/core';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg';

const SHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .hero-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .paragraph {
      max-width: 450px;
      @media (max-width: 1366px) {
        max-width: 390px;
      }
    }
  }
  .extra {
    display: flex;
    font-weight: 900;
    max-width: 240px;
    line-height: 1.5;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  .scroller {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-22px);
    &:hover {
      .scroller__text {
        color: ${({ theme }) => theme.colors.vein};
      }
      svg {
        color: ${({ theme }) => theme.colors.vein};
      }
    }

    svg {
      transition: all ease 400ms;
    }

    &__text {
      margin-inline-start: 0.5rem;
      font-size: 0.85rem;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
      transition: all ease 400ms;
      padding: 1rem 0;

      @media (max-width: 1366px) {
        font-size: 0.7rem;
      }
      @media (max-width: 992px) {
        font-size: 0.75rem;
      }
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
      @media (max-width: 576px) {
        font-size: 0.65rem;
      }
    }
  }
`;

const Hero = ({
  pageTitle,
  line1,
  line2,
  paragraph,
  buttonText,
  buttonPath,
  extra,
  scroller
}) => {
  return (
    <SHero>
      <div className='hero-wrapper'>
        <Title pageTitle>{pageTitle}</Title>
        <Title>
          <div className='line-wrapper'>
            <div className='line'>{line1 && line1}</div>
          </div>
          <div className='line-wrapper'>
            <div className='line'>{line2 && line2}</div>
          </div>
        </Title>
        <Paragraph>
          <div className='text-wrapper'>
            <div className='text'>{paragraph && paragraph}</div>
          </div>
        </Paragraph>
        {buttonText && (
          <>
            <Link to={buttonPath}>
              <Button>
                {/* <div className='icon'>
              <SquareIcon />
            </div>{' '} */}
                {buttonText && buttonText}
              </Button>
            </Link>
          </>
        )}
        {extra && <small className='extra'>{extra}</small>}
        {scroller && (
          <a className='scroller' href='#mid'>
            <IconButton>
              <ArrowDownIcon />
            </IconButton>
            <span className='scroller__text'>Scroll down for more</span>
          </a>
        )}
      </div>
    </SHero>
  );
};

export default Hero;
