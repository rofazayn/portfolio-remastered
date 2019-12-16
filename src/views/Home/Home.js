import React from 'react';
import styled from 'styled-components';

import HeroImage from '../../assets/images/hero.jpg';
import Hero from '../../components/Hero/Hero';

const SHome = styled.div`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .images {
    z-index: 0;
    width: 100%;
    max-width: 640px;
    display: grid;
    grid-gap: 40px;
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
  // Page content
  const line1 = `Welcome to my`;
  const line2 = `personal portfolio.`;
  const paragraph = `Hi. My name is Abderraouf. I am a front-end web developer from the Chawi
  Amazigh lands. Please take a look around and discover what I can offer
  for you, your business or your company.`;
  const buttonText = `Have a look at my resume`;

  return (
    <SHome>
      <Hero
        line1={line1}
        line2={line2}
        paragraph={paragraph}
        buttonText={buttonText}
        buttonPath={'/resume'}
      />
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
