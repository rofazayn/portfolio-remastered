import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';

const SHome = styled.div`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
      <Image />
    </SHome>
  );
};

export default Home;
