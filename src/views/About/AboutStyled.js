import styled from 'styled-components';

const SAbout = styled.div`
  width: 100%;
  .rofa {
    display: flex;
    justify-items: space-between;
    align-items: center;
    @media (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
    }

    .item {
      position: relative;
      &:first-of-type {
        margin-inline-end: 5rem;
        @media (max-width: 768px) {
          margin-inline-end: 0;
          margin-block-end: 2rem;
        }
      }

      img {
        width: 100%;
        max-width: 400px;
        /* box-shadow: -18px -18px 0 ${({ theme }) => theme.colors.vein}; */
        @media (max-width: 768px) {
          margin-inline-end: 0;
          /* box-shadow: -13px -13px 0 ${({ theme }) => theme.colors.vein}; */
        }
      }
    }
  }
  .skills {
    margin: 15rem 0 6rem 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin-top: 4rem;
      margin-bottom: 0;
      flex-direction: column;
      justify-content: flex-start;
    }
    &__header {
      position: -webkit-sticky;
      position: sticky;
      top: 7rem;
      align-self: flex-start;
      padding-bottom: 4.46rem;
      @media (max-width: 768px) {
        position: static;
        padding: 0;
        padding-bottom: 2rem;
      }
    }
    &__list {
      width: 100%;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      @media (max-width: 768px) {
        align-items: flex-end;
      }
      /* background: red; */
      &__set {
        width: 90%;
        margin-bottom: 5rem;
        @media (max-width: 768px) {
          width: 100%;
          margin-bottom: 3rem;
        }

        h3 {
          text-align: center;
          margin-bottom: 3rem;
          font-family: 'Alegreya', 'Lato';
          color: ${({ theme }) => theme.colors.secondary};
          @media (max-width: 768px) {
            text-align: start;
            margin-bottom: 1rem;
          }
        }
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          list-style: none;
          @media (max-width: 768px) {
            justify-content: space-between;
          }
          .item {
            /* text-align: center; */
            width: 100%;
            max-width: 100%;
            transition: background ease 250ms;
            padding: 1.5rem 0 1rem 0;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: default;
            img {
              width: 85px;
              height: 85px;
              margin: 0 auto;
              @media (max-width: 768px) {
                width: 60px;
                height: 60px;
              }
              /* margin-bottom: 1rem; */
            }
            &__title {
              color: ${({ theme }) => theme.colors.primary};
              text-align: center;
              margin: 1rem 0 0.25rem 0;
            }
            &__level {
              text-align: center;
              color: ${({ theme }) => theme.colors.secondary};
            }
            &:hover {
              /* background: papayawhip; */
              background: ${({ theme }) => theme.colors.accent};
              box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }
`;

export default SAbout;
