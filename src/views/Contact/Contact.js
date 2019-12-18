import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';

const SContact = styled.main`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Contact = () => {
  const line1 = `Feel free to contact`;
  const line2 = `me at anytime.`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
  const buttonText = `Back to the homepage`;

  return (
    <SContact>
      <Hero
        line1={line1}
        line2={line2}
        paragraph={paragraph}
        buttonText={buttonText}
        buttonPath={'/'}
      />
      <Image />
    </SContact>
  );
};

export default Contact;
