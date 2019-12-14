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
          color: gray;
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
        <a href='/' target='_blank' className='icon'>
          <TwitterIcon />
        </a>
        <a href='/' target='_blank' className='icon'>
          <GithubIcon />
        </a>
        <a href='/' target='_blank' className='icon'>
          <LinkedInIcon />
        </a>
      </div>
    </SSocial>
  );
};

export default Social;
