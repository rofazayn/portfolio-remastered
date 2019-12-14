import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import Button from '../../components/Button/Button';
import HeroImage from '../../assets/images/hero.jpg';

const SHome = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
      max-width: 480px;
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 30px;
    }

    p {
      max-width: 540px;
      line-height: 2.2;
      margin-bottom: 30px;
      color: gray;
    }

    align-items: flex-start;
  }
  .images {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .image {
      width: 550px;
      height: 550px;
      background: gray;
      display: flex;
      img {
        object-fit: cover;
        width: 100%;
        height: auto;
        overflow: hidden;
      }
    }
  }
`;

const Home = () => {
  return (
    <SHome>
      <div className='text'>
        <h1>Welcome to my humble portfolio.</h1>
        <p>
          Hi. My name is Abderraouf. I am a front-end web developer from the
          Chawi Amazigh lands. Please take a look around and discover what I can
          offer for you, you business or your company.
        </p>
        <Button>
          <div className='icon'>
            <SquareIcon />
          </div>{' '}
          Check my showcases
        </Button>
      </div>
      <div className='images'>
        <div className='image'>
          <img src={HeroImage} alt='Hero' />
        </div>
      </div>
    </SHome>
  );
};

export default Home;
