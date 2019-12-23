import React from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import homeImage from '../../assets/images/03.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SHome = styled.div`
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 1200px) {
    }
    @media (max-width: 992px) {
    }
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    @media (max-width: 576px) {
    }
  }
`;

const Home = () => {
  // Page content
  const line1 = `Welcome to my`;
  const line2 = `personal portfolio.`;
  const paragraph = `Hi. My name is Abderraouf. I am a front-end web developer from the Chawi
  Amazigh lands. Have a look around and discover what I can offer
  for you or your business.`;
  const buttonText = `Some projects I've built`;

  return (
    <SHome className='page'>
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/projects'}
          />
          {/* <div className='image'>
            <img src={homeImage} alt='Home' />
          </div> */}
          <Image src={homeImage} />
        </div>
      </Container>
    </SHome>
  );
};

export default Home;
