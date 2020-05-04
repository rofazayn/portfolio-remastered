import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import { Button, Tooltip } from '@material-ui/core';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as ResumeIcon } from '../../assets/icons/file-text.svg';
import { revealHeadings } from '../../helpers/Animations';
import { useRef } from 'react';

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
  .social {
    margin-bottom: 32px;
    ul {
      display: flex;
      list-style: none;
      li {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-inline-end: 8px;
          padding: 8px;
          svg {
            color: ${({ theme }) => theme.colors.secondary};
            width: 24px;
            height: 24px;
          }
          &:hover {
            svg {
              color: ${({ theme }) => theme.colors.vein};
            }
          }
        }
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
  buttonIcon,
  withSocial,
  extra,
  scroller,
  scrollButtonText,
}) => {
  let line1Ref = useRef(null);
  let line2Ref = useRef(null);

  useEffect(() => {
    revealHeadings(line1Ref.current, line2Ref.current);
  }, [line1Ref, line2Ref]);

  return (
    <SHero>
      <div className='hero-wrapper'>
        <Title pageTitle>{pageTitle}</Title>
        <Title>
          <div className='line-wrapper'>
            <div className='line' ref={line1Ref}>
              {line1 && line1}
            </div>
          </div>
          <div className='line-wrapper'>
            <div className='line' ref={line2Ref}>
              {line2 && line2}
            </div>
          </div>
        </Title>
        <Paragraph>
          <div className='text-wrapper'>
            <div className='text'>{paragraph && paragraph}</div>
          </div>
        </Paragraph>
        {withSocial && (
          <div className='social'>
            <ul>
              <li>
                <Tooltip arrow={true} title='GitHub'>
                  <a
                    href='https://github.com/rofazayn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <GithubIcon />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip arrow={true} title='Twitter'>
                  <a
                    href='https://twitter.com/rofazayn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <TwitterIcon />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip arrow={true} title='LinkedIn'>
                  <a
                    href='https://www.linkedin.com/in/abderraouf-zine-906642192/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <LinkedInIcon />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip arrow={true} title='Resume'>
                  <a
                    href={
                      process.env.PUBLIC_URL + '/docs/abderraouf-resume.pdf'
                    }
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ResumeIcon />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        )}
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
                {buttonText ? buttonText : 'Hmm! Something went wrong...'}
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
