import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';
import Container from '../../components/Container/Container';

const SContact = styled.main`
  position: absolute;
  width: 100%;
  top: calc(1rem + 100px);
  padding-bottom: calc(1rem + 100px);
  left: 0;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
      & > div {
        &:first-of-type {
          margin-bottom: 40px;
        }
      }
    }
  }
`;

const Contact = () => {
  const line1 = `Feel free to contact`;
  const line2 = `me at anytime.`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
  const buttonText = `Back to the homepage`;

  return (
    <SContact className='page'>
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/'}
          />
          <Image />
        </div>
      </Container>
    </SContact>
  );
};

export default Contact;
