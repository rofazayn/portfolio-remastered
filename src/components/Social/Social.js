import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider/Divider';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';

const SSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    color: gray;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-inline-end: 0.5rem;
  }
  .icons {
    display: flex;
    .icon {
      color: gray;
      display: flex;
      padding: 0.5rem;
      cursor: pointer;
      svg {
        width: 18px;
        height: 18px;
        transition: all ease-in-out 250ms;
      }
      &:hover {
        svg {
          color: white;
        }
      }
    }
  }
`;

const Social = () => {
  return (
    <SSocial>
      <p>Find me</p>
      <Divider vertical />
      <div className='icons'>
        <a
          href='https://twitter.com/rofazayn'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'
        >
          <TwitterIcon />
        </a>
        <a
          href='https://github.com/rofazayn/portfolio-remastered'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'
        >
          <GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/abderraouf-zine-906642192/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'
        >
          <LinkedInIcon />
        </a>
      </div>
    </SSocial>
  );
};

export default Social;
