import React from 'react';
import styled from 'styled-components';
// import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import { Button } from '@material-ui/core';
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
`;

const Hero = ({
  pageTitle,
  line1,
  line2,
  paragraph,
  buttonText,
  buttonPath,
  buttonIcon,
  extra,
  scroller,
  scrollButtonText
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
              <Button
                endIcon={buttonIcon}
                variant='outlined'
                color='primary'
                size='large'
                className='custom-button'
              >
                {buttonText ? buttonText : 'Hmm! Smothing went wrong...'}
              </Button>
            </Link>
          </>
        )}
        {extra && <small className='extra'>{extra}</small>}
        {scroller && (
          <a className='scroller' href='#mid'>
            <Button
              startIcon={<ArrowDownIcon width='18px' />}
              variant='outlined'
              color='primary'
              size='large'
              className='custom-button'
            >
              {scrollButtonText ? scrollButtonText : 'Scroll down for more'}
            </Button>
          </a>
        )}
      </div>
    </SHero>
  );
};

export default Hero;
