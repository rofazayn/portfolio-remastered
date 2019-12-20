import React from 'react';
import styled from 'styled-components';
// import Image from '../../components/Image/Image';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SHire = styled.main`
  width: 100%;
`;

const Hire = () => {
  const line1 = `Looking to hire?`;
  const line2 = `let's talk about it!`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
  const buttonText = `Send me an email`;

  return (
    <SHire className='page'>
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/contact'}
          />
          {/* <Image /> */}
        </div>
      </Container>
    </SHire>
  );
};

export default Hire;
