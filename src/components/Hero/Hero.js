import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import {
  revealHeadings,
  revealParagraph,
  revealButtons
} from '../../helpers/Animations';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';

const SHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Hero = ({
  pageTitle,
  line1,
  line2,
  paragraph,
  buttonText,
  buttonPath
}) => {
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
      <Title pageTitle>{pageTitle}</Title>
      <Title>
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
      </Title>
      <Paragraph>
        <div className='text-wrapper'>
          <div className='text' ref={el => (text = el)}>
            {paragraph && paragraph}
          </div>
        </div>
      </Paragraph>
      {buttonText && (
        <>
          <Link to={buttonPath}>
            <Button ref={el => (button = el)}>
              {/* <div className='icon'>
              <SquareIcon />
            </div>{' '} */}
              {buttonText && buttonText}
            </Button>
          </Link>
        </>
      )}
    </SHero>
  );
};

export default Hero;
