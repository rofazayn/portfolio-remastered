import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';

const SContact = styled.main``;

const Contact = () => {
  const line1 = `Feel free to contact`;
  const line2 = `me at anytime.`;
  const paragraph = `orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
  // const buttonText = `See if I am available`;

  return (
    <SContact>
      <Hero
        line1={line1}
        line2={line2}
        paragraph={paragraph}
        // buttonText={buttonText}
        // buttonPath={'/contact'}
      />
    </SContact>
  );
};

export default Contact;
