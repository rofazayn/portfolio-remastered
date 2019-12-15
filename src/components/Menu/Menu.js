import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const SMenu = styled.div`
  position: relative;
  /* display: none; */
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  .menu-secondary-background {
    background: white;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .menu-layer {
    background: red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .menu-links {
      display: block;
      ul {
        display: flex;
        flex-direction: column;
        li {
          position: relative;
          list-style: none;
          font-size: 6rem;
          font-weight: 700;
          height: 135px;
          overflow: hidden;
          a {
            position: absolute;
            color: white;
          }
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <SMenu>
      <div className='menu-secondary-background'></div>
      <div className='menu-layer'>
        <Container>
          <nav className='menu-links'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/resume'>Resume</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </SMenu>
  );
};

export default Menu;
