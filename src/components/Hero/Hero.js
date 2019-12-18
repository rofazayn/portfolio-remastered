import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import {
  revealHeadings,
  revealParagraph,
  revealButtons
} from '../../helpers/Animations';

const SHero = styled.div`
  @media (max-width: 1200px) {
    margin-bottom: 3rem;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
  .title {
    margin-bottom: 30px;
    user-select: none;
    .line-wrapper {
      position: relative;
      overflow: hidden;
      height: 55px;
      @media (max-width: 1440px) {
        height: 45px;
      }
      .line {
        max-width: 480px;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 135%;
        @media (max-width: 1440px) {
          font-size: 2rem;
        }
      }
    }
  }

  .paragraph {
    user-select: none;
    margin-bottom: 30px;
    .text-wrapper {
      position: relative;
      overflow: hidden;
      display: flex;
      width: 100%;
      .text {
        color: #7d7d7d;
        max-width: 550px;
        line-height: 2.2;
        @media (max-width: 1440px) {
          font-size: 0.9rem;
          max-width: 480px;
        }
      }
    }
  }
`;

const Hero = ({ line1, line2, paragraph, buttonText, buttonPath }) => {
  let heading1 = useRef(null);
  let heading2 = useRef(null);
  let text = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    revealHeadings(heading1, heading2);
    revealParagraph(text);
    revealButtons(button);
  }, [heading1, heading2, text, button]);

  return (
    <SHero>
      <div className='title'>
        <div className='line-wrapper'>
          <div className='line' ref={el => (heading1 = el)}>
            {line2 && line1}
          </div>
        </div>
        <div className='line-wrapper'>
          <div className='line' ref={el => (heading2 = el)}>
            {line2 && line2}
          </div>
        </div>
      </div>
      <div className='paragraph'>
        <div className='text-wrapper'>
          <div className='text' ref={el => (text = el)}>
            {paragraph && paragraph}
          </div>
        </div>
      </div>
      {buttonText && (
        <Link to={buttonPath}>
          <Button ref={el => (button = el)}>
            <div className='icon'>
              <SquareIcon />
            </div>{' '}
            {buttonText && buttonText}
          </Button>
        </Link>
      )}
    </SHero>
  );
};

export default Hero;
