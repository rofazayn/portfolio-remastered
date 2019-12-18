import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Image from '../../components/Image/Image';
import Container from '../../components/Container/Container';

const SResume = styled.div`
  position: absolute;
  width: 100%;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
`;

const Resume = () => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide product design services, from wireframing and prototyping, to UI design and front-end development. With more than 5 years of experience working for individuals, startups and established companies to improve their products.`;
  const buttonText = `Are you hiring?`;

  return (
    <SResume>
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/hire'}
          />
          <Image />
        </div>
      </Container>
    </SResume>
  );
};

export default Resume;
