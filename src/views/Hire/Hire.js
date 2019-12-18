import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';
import Container from '../../components/Container/Container';

const SHire = styled.main`
  position: absolute;
  width: 100%;
  top: 150px;
  left: 0;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
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
          <Image />
        </div>
      </Container>
    </SHire>
  );
};

export default Hire;
