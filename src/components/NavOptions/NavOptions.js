import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as XIcon } from '../../assets/icons/x.svg';
import Divider from '../Divider/Divider';
import Menu from '../Menu/Menu';
import { NavLink, withRouter } from 'react-router-dom';

const SNavOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icons {
    display: flex;
    .icon {
      display: flex;
      padding: 1rem;
      cursor: pointer;
      color: white;
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

const NavOptions = ({ history }) => {
  let xIcon = useRef(null),
    menuIcon = useRef(null);

  const [state, setState] = useState({
    initial: false,
    isClicked: null,
    isMenuOpen: false
  });

  const [menuDisabled, setMenuDisabled] = useState(false);

  // Listen for routes change

  useEffect(() => {
    history.listen(() => {
      setState({
        isClicked: false,
        isMenuOpen: false
      });
    });
  });

  // Handle user actions on the menu icon
  const handleMenuActions = () => {
    disableMenu();

    const { initial, isClicked } = state;

    if (initial === false) {
      setState({
        initial: null,
        isClicked: true,
        isMenuOpen: true
      });
    } else if (isClicked === true) {
      setState({
        isClicked: !isClicked,
        isMenuOpen: false
      });
    } else if (isClicked === false) {
      setState({
        isClicked: !isClicked,
        isMenuOpen: true
      });
    }
  };

  // Disable the menu for a period of time to prevent spamming
  const disableMenu = () => {
    setMenuDisabled(!menuDisabled);

    setTimeout(() => {
      setMenuDisabled(false);
    }, 1500);
  };
  return (
    <SNavOptions>
      <NavLink to='/hire'>
        <Button>
          <div className='icon'>
            <SquareIcon />
          </div>
          Hire me
        </Button>
      </NavLink>
      <Divider />
      <div className='icons'>
        {/* <div className='icon'>
          <SunIcon />
        </div> */}
        <button
          className='icon'
          disabled={menuDisabled}
          onClick={handleMenuActions}
        >
          {state.isMenuOpen ? (
            <XIcon ref={element => (element = xIcon)} />
          ) : (
            <MenuIcon ref={element => (element = menuIcon)} />
          )}
        </button>
      </div>
      <Menu toggler={state} />
    </SNavOptions>
  );
};

export default withRouter(NavOptions);
