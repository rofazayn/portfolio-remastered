import React from 'react';
import styled from 'styled-components';
// import { setWrapperHeight } from '../../redux/actions/ui.actions';
// import { useDispatch } from 'react-redux';

const SPage = styled.div`
  position: relative;

  /* min-height: 20000px; */
  width: 100%;
  /* padding-bottom: 100px; */
  /* overflow: hidden; */

  .top {
    width: 100%;
    height: 100%;

    min-height: 100vh;
    /* padding-bottom: 4vh; */
    @media (max-height: 800px) {
      min-height: 700px;
    }
    @media (max-width: 992px) {
      padding-top: 100px;
      padding-bottom: 100px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;

    &.--reverse-row {
      flex-direction: row-reverse;
      @media (max-width: 768px) {
        flex-direction: column-reverse;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    &.--no-reverse {
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .section {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }

  .mid {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* padding-bottom: 5rem; */
    @media (max-width: 768px) {
      /* padding-bottom: 5rem; */
    }
  }
  .section {
    width: 100%;
  }

  .bot {
    width: 100%;
    height: 100%;
    /* min-height: 100vh; */
    /* display: flex;
    justify-content: center;
    align-items: flex-start; */
    flex-direction: column;
    padding-bottom: 7rem;
    @media (max-width: 768px) {
      padding-bottom: 5rem;
    }
    .cta {
      /* text-align: center; */
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 4rem 3rem;
      margin: 2rem 0;
      background: ${({ theme }) => theme.colors.accent};
      /* color: ${({ theme }) => theme.colors.background}; */
      border-radius: 5px;
      /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.05); */
      @media (max-width: 768px) {
        padding: 3rem 1rem;
      }
    }
  }
  .section {
    width: 100%;
  }
`;

const Page = ({ children, ...otherProps }) => {
  // const dispatch = useDispatch();

  // Calculate page height
  // let page = useRef(null);

  // useEffect(() => {
  //   console.log(page.clientHeight);
  // });
  return <SPage {...otherProps}>{children}</SPage>;
};

export default Page;
