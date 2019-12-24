import React from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import contactImage from '../../assets/images/06.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SContact = styled.main`
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 1200px) {
    }
    @media (max-width: 992px) {
    }
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    @media (max-width: 576px) {
    }
  }
`;

const Contact = () => {
  const line1 = `Feel free to contact`;
  const line2 = `me at anytime.`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
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
          <Image src={contactImage} />
        </div>
      </Container>
    </SContact>
  );
};

export default Contact;
