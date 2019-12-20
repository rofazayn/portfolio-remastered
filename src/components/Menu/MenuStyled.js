import styled from 'styled-components';

export const SMenu = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: -1;
  .menu-secondary-background {
    background: ${({ theme }) => theme.colors.vein};
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
    background: ${({ theme }) => theme.colors.background};
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
          font-size: 5rem;
          font-weight: 700;
          height: 135px;
          overflow: hidden;
          @media (max-width: 1440px) {
            font-size: 2rem;
            height: 55px;
          }
          a {
            position: absolute;
            color: ${({ theme }) => theme.colors.primary};
            opacity: 1;
            &::before {
              position: absolute;
              content: '';
              bottom: 0;
              left: 0;
              height: 100%;
              width: 0%;
              z-index: -1;
              background: ${({ theme }) => theme.colors.vein};
              transition: all ease-in-out 300ms;
            }
            &.active {
              color: ${({ theme }) => theme.colors.background};

              &::before {
                width: 100%;
              }
              &:hover {
                color: ${({ theme }) => theme.colors.background};
                &::before {
                  height: 80%;
                }
              }
            }

            &:hover {
              color: ${({ theme }) => theme.colors.vein};
            }
          }
        }
      }
    }
  }
`;
