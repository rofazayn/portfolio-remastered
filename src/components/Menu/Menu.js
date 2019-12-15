import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  staggerRevealClose,
  staggerReveal,
  staggerText,
  handleHoverExit,
  handleHover
} from './MenuAnimations';

const SMenu = styled.div`
  position: relative;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: -1;
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
    position: relative;
    background: #303952;
    height: 100%;
    overflow: hidden;
    .menu-links {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
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
            &:hover {
              color: black;
            }
          }
        }
      }
    }
  }
`;

const Menu = ({ toggler }) => {
  // Elements to animate
  let myMenu = useRef(null),
    reveal1 = useRef(null),
    reveal2 = useRef(null),
    line1 = useRef(null),
    line2 = useRef(null),
    line3 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (toggler.isClicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(myMenu, { duration: 1, css: { display: 'none' } });
    } else if (
      toggler.isClicked === true ||
      (toggler.isClicked === true && toggler.initial === null)
    ) {
      // Set menu to display block
      gsap.to(myMenu, { duration: 0, css: { display: 'block' } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%'
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3);
    }
  }, [toggler]);

  return (
    <SMenu ref={el => (myMenu = el)}>
      <div
        className='menu-secondary-background'
        ref={el => (reveal1 = el)}
      ></div>
      <div className='menu-layer' ref={el => (reveal2 = el)}>
        <Container>
          <nav className='menu-links'>
            <ul>
              <li>
                <Link
                  to='/'
                  ref={el => (line1 = el)}
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/resume'
                  ref={el => (line2 = el)}
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  ref={el => (line3 = el)}
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </SMenu>
  );
};

export default Menu;
