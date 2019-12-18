import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';
import Container from '../../components/Container/Container';

const SHome = styled.div`
  position: absolute;
  width: 100%;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
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
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/resume'}
          />
          <Image />
        </div>
      </Container>
    </SHome>
  );
};

export default Home;
