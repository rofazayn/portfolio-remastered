import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import Divider from '../Divider/Divider';

const SNavOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  .icons {
    display: flex;
    .icon {
      display: flex;
      padding: 1rem;
      cursor: pointer;
      svg {
        width: 20px;
        height: 20px;
      }
      &:hover {
        svg {
          color: gray;
        }
      }
    }
  }
`;

const NavOptions = () => {
  return (
    <SNavOptions>
      <Button>
        <div className='icon'>
          <SquareIcon />
        </div>{' '}
        Hire me
      </Button>
      <Divider />
      <div className='icons'>
        <div className='icon'>
          <SunIcon />
        </div>
        <div className='icon'>
          <MenuIcon />
        </div>
      </div>
    </SNavOptions>
  );
};

export default NavOptions;
