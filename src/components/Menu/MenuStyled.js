import styled from 'styled-components';

export const SMenu = styled.div`
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
    background: black;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    .menu-links {
      width: 100%;
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
            opacity: 1;
            &:hover {
              color: tomato;
            }
          }
        }
      }
    }
  }
`;
