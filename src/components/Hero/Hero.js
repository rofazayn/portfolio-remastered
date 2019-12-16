import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { revealHeadings } from '../../helpers/Animations';

const SHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  .title {
    margin-bottom: 30px;
    .line-wrapper {
      position: relative;
      overflow: hidden;
      height: 55px;
      .line {
        max-width: 480px;
        font-size: 2.5rem;
        font-weight: 700;

        line-height: 135%;
      }
    }
  }

  .paragraph {
    .text-wrapper {
      position: relative;
      overflow: hidden;
      .text {
        max-width: 540px;
        line-height: 2.2;
        margin-bottom: 30px;
        color: gray;
      }
    }
  }
`;

const Hero = ({ line1, line2, paragraph, buttonText, buttonPath }) => {
  let heading1 = useRef(null);
  let heading2 = useRef(null);

  useEffect(() => {
    revealHeadings(heading1, heading2);
  }, [heading1, heading2]);

  return (
    <SHero>
      <h1 className='title'>
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
      </h1>
      <p className='paragraph'>
        <div className='text-wrapper'>
          <div className='text'>{paragraph && paragraph}</div>
        </div>
      </p>
      <Link to={buttonPath}>
        <Button>
          <div className='icon'>
            <SquareIcon />
          </div>{' '}
          {buttonText && buttonText}
        </Button>
      </Link>
    </SHero>
  );
};

export default Hero;
