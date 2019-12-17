import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';

const SResume = styled.div``;

const Resume = () => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide product design services, from wireframing and prototyping, to UI design and front-end development. With more than 5 years of experience working for individuals, startups and established companies to improve their products.`;
  const buttonText = `Are you hiring?`;

  return (
    <SResume>
      <Hero
        line1={line1}
        line2={line2}
        paragraph={paragraph}
        buttonText={buttonText}
        buttonPath={'/hire'}
      />
    </SResume>
  );
};

export default Resume;
