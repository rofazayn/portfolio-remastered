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
  padding: 0;
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
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem;
        font-family: 'Lato';
        font-weight: 600;
        position: relative;
        transition: all ease-in-out 250ms;
        @media (max-width: 1366px) {
          font-size: 0.7rem;
          padding: 0.8rem 0.5rem;
        }
        &::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 3px;
          border-radius: 100%;
          background: transparent;
          /* background: red; */
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          transition: all ease 400ms;
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
  .theme-toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 120px;
      padding: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.8rem;
      font-family: 'Lato';
      font-weight: 600;
      transition: all ease-in-out 250ms;
      @media (max-width: 1366px) {
        font-size: 0.7rem;
        padding: 0.8rem 0.5rem;
        svg {
          width: 16px;
          height: 16px;
        }
      }
      &:hover {
        color: ${({ theme }) => theme.colors.artery};
      }
    }
    /* padding: 1rem; */
    @media (max-width: 1200px) {
      padding: 0.75rem;
    }
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    svg {
      margin-inline-end: 0.5rem;
      transition: all ease-in-out 250ms;
      width: 18px;
      height: 18px;
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
        <Divider vertical />

        <li className='icon theme-toggler' onClick={() => handleThemeToggle()}>
          {isDarkTheme ? (
            <>
              <SunIcon />
              <span>Lights ON.</span>
            </>
          ) : (
            <>
              <MoonIcon />
              <span>Lights OFF.</span>
            </>
          )}
        </li>
      </ul>
    </SNavbarStatic>
  );
};

export default NavbarStatic;
