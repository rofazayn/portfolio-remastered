import React from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import resumeImage from '../../assets/images/05.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SResume = styled.div`
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

const Resume = () => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide product design services, from wireframing and prototyping, to UI design and front-end development. With more than 5 years of experience working for individuals, startups and established companies to improve their products.`;
  const buttonText = `Are you hiring?`;

  return (
    <SResume className='page'>
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/hire'}
          />
          <Image src={resumeImage} />
        </div>
      </Container>
    </SResume>
  );
};

export default Resume;
