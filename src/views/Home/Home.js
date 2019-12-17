import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';

const SHome = styled.div`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    </SHome>
  );
};

export default Home;
