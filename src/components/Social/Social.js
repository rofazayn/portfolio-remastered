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
  font-size: 14px;
  color: gray;
  .icons {
    display: flex;
    .icon {
      display: flex;
      padding: 0.5rem;
      cursor: pointer;
      svg {
        width: 18px;
        height: 18px;
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
      <p>Follow me</p>
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
