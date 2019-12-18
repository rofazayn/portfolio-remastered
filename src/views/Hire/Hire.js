import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';

const SHire = styled.main`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Hire = () => {
  const line1 = `Looking to hire?`;
  const line2 = `let's talk about it!`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
  const buttonText = `Send me an email`;

  return (
    <SHire>
      <Hero
        line1={line1}
        line2={line2}
        paragraph={paragraph}
        buttonText={buttonText}
        buttonPath={'/contact'}
      />
      <Image />
    </SHire>
  );
};

export default Hire;
