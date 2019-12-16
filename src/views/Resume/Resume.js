import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';

const SResume = styled.div``;

const Resume = () => {
  const line1 = `Years of experience`;
  const line2 = `at your service.`;
  const paragraph = `Hi. My name is Abderraouf. I am a front-end web developer from the Chawi
  Amazigh lands. Please take a look around and discover what I can offer
  for you, you business or your company.`;
  const buttonText = `Get in touch`;

  return (
    <SResume>
      <Hero
        line1={line1}
        line2={line2}
        paragraph={paragraph}
        buttonText={buttonText}
        buttonPath={'/contact'}
      />
    </SResume>
  );
};

export default Resume;
