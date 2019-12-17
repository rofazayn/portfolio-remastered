import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import HeroImage from '../../assets/images/hero.webp';
import Hero from '../../components/Hero/Hero';
import { staggerRevealImages } from '../../helpers/Animations';

const SHome = styled.div`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .images {
    z-index: 0;
    width: 100%;
    max-width: 540px;
    display: grid;
    grid-gap: 40px;
    grid-template: 1fr 1fr / 1fr 1fr;
    place-items: center;
    justify-items: center;
    @media (max-width: 1440px) {
      grid-gap: 30px;
      max-width: 430px;
    }
    .image {
      display: flex;
      object-fit: cover;
      width: 250px;
      height: 250px;
      overflow: hidden;
      @media (max-width: 1440px) {
        width: 200px;
        height: 200px;
      }
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
        border-radius: 5px;
        transform: translateX(-100%);
        object-fit: cover;
        width: 100%;
        height: auto;
        overflow: hidden;
        opacity: 0;
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

  // Image refs
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);

  useEffect(() => {
    staggerRevealImages(image1, image2, image3, image4);
  }, []);

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
          <img src={HeroImage} alt='Hero' ref={el => (image1 = el)} />
        </div>
        <div className='image two'>
          <img src={HeroImage} alt='Hero' ref={el => (image2 = el)} />
        </div>
        <div className='image three'>
          <img src={HeroImage} alt='Hero' ref={el => (image3 = el)} />
        </div>
        <div className='image four'>
          <img src={HeroImage} alt='Hero' ref={el => (image4 = el)} />
        </div>
      </div>
    </SHome>
  );
};

export default Home;
