import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/actions/ui.actions';
import Divider from '../Divider/Divider';

const SNavbarStatic = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 0;
  @media (max-width: 999px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    color: ${({ theme }) => theme.colors.secondary};
    /* margin-inline-end: 2rem; */
    li {
      a {
        padding: 1rem;
        /* text-transform: uppercase; */
        letter-spacing: 1px;
        font-size: 1rem;
        font-family: 'Alegreya';
        position: relative;
        transition: all ease-in-out 250ms;
        &::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 3px;
          border-radius: 100%;
          background: ${({ theme }) => theme.colors.background};
          /* background: red; */
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          transition: all ease-in-out 250ms;
        }
        &.active {
          color: ${({ theme }) => theme.colors.vein};
          &::before {
            background: ${({ theme }) => theme.colors.vein};
          }
        }
        &:hover {
          color: ${({ theme }) => theme.colors.vein};
          &::before {
            background: ${({ theme }) => theme.colors.vein};
          }
        }
      }
    }
  }
  .icon {
    display: flex;
    padding: 1rem;
    @media (max-width: 1200px) {
      padding: 0.75rem;
    }
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    svg {
      transition: all ease-in-out 250ms;
      width: 20px;
      height: 20px;
    }
    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.artery};
      }
    }
  }
`;

const NavbarStatic = () => {
  const dispatch = useDispatch();

  // Check theme
  const isDarkTheme = useSelector(state => state.ui.isDarkTheme);

  // Toggle theme on button click
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <SNavbarStatic>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/resume'>Resume</NavLink>
        </li>
        <li>
          <NavLink to='/hire'>Hire me</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <Divider vertical />
      <div className='icon' onClick={() => handleThemeToggle()}>
        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      </div>
    </SNavbarStatic>
  );
};

export default NavbarStatic;
