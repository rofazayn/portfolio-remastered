import styled from 'styled-components';

const SResume = styled.div`
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
      }
    }
  }
  .skills {
    margin: 15rem 0 40rem 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin: 4rem 0;
      flex-direction: column;
      justify-content: flex-start;
    }
    &__header {
      position: -webkit-sticky;
      position: sticky;
      top: 7rem;
      align-self: flex-start;
      padding-bottom: 3.25rem;
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
        @media (max-width: 768px) {
          width: 100%;
        }
        h3 {
          text-align: center;
          margin-bottom: 3rem;
          font-family: 'Alegreya', 'Lato';
          color: ${({ theme }) => theme.colors.secondary};
        }
        margin-bottom: 5rem;
        ul {
          margin-bottom: 3rem;
          &:last-of-type {
            margin-bottom: 0;
          }
          display: flex;
          justify-content: space-around;
          list-style: none;
          .item {
            text-align: center;
            min-width: 33%;
            img {
              width: 90px;
              height: 90px;
              margin: 0 auto;
              @media (max-width: 768px) {
                width: 60px;
                height: 60px;
              }
              margin-bottom: 1rem;
            }
            &__title {
              color: ${({ theme }) => theme.colors.primary};
              text-align: center;
              margin-bottom: 0.25rem;
            }
            &__level {
              text-align: center;
              color: ${({ theme }) => theme.colors.secondary};
            }
          }
        }
      }
    }
  }
`;

export default SResume;
