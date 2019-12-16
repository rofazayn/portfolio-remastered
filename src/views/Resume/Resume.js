import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';

const SResume = styled.div``;

const Resume = () => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
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
