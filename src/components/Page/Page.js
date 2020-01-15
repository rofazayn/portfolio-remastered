import React from 'react';
import styled from 'styled-components';
// import { setWrapperHeight } from '../../redux/actions/ui.actions';
// import { useDispatch } from 'react-redux';

const SPage = styled.div`
  position: relative;

  min-height: 20000px;
  width: 100%;
  /* padding-bottom: 100px; */
  /* overflow: hidden; */

  .top {
    width: 100%;
    height: 100%;

    min-height: 100vh;
    /* padding-bottom: 4vh; */
    @media (max-height: 600px) {
      min-height: 700px;
    }
    @media (max-width: 992px) {
      padding-top: 100px;
      padding-bottom: 100px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;

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
    padding-bottom: 5rem;
    @media (max-width: 768px) {
      padding-bottom: 5rem;
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
