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
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
  .title {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
    .line-wrapper {
      position: relative;
      overflow: hidden;
      .line {
        max-width: 480px;
        font-size: 2.5rem;
        font-weight: 900;
        line-height: 1.3;
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .paragraph {
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
        max-width: 550px;
        line-height: 2;
        @media (max-width: 768px) {
          max-width: 380px;
          font-size: 0.8rem;
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
    if (heading2 === null) {
      revealHeadings(heading1);
    } else {
      revealHeadings(heading1, heading2);
    }
    revealParagraph(text);
    revealButtons(button);
  }, [heading1, heading2, text, button]);

  return (
    <SHero>
      <div className='title'>
        <div className='line-wrapper'>
          <div className='line' ref={el => (heading1 = el)}>
            {line1 && line1}
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
