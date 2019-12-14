import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import Button from '../../components/Button/Button';
import HeroImage from '../../assets/images/hero.jpg';

const SHome = styled.main`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .text {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
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
  }
  .images {
    z-index: 0;
    width: 100%;
    max-width: 650px;
    display: grid;
    grid-gap: 50px;
    grid-template: 1fr 1fr / 1fr 1fr;
    place-items: center;
    justify-items: center;
    .image {
      display: flex;
      object-fit: cover;
      width: 300px;
      height: 300px;
      overflow: hidden;
      &.one {
        justify-content: flex-end;
        transform: scaleX(-1);
      }
      &.two {
        transform: scaleX(1);
      }
      &.three {
        transform: scaleX(-1) scaleY(-1);
      }
      &.four {
        transform: scaleY(-1);
      }
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
        <div className='image one'>
          <img src={HeroImage} alt='Hero' />
        </div>
        <div className='image two'>
          <img src={HeroImage} alt='Hero' />
        </div>
        <div className='image three'>
          <img src={HeroImage} alt='Hero' />
        </div>
        <div className='image four'>
          <img src={HeroImage} alt='Hero' />
        </div>
      </div>
    </SHome>
  );
};

export default Home;
