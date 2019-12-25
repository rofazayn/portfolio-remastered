import React, { useEffect } from 'react';
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
      flex-direction: column;
      align-items: flex-start;
    }
    @media (max-width: 576px) {
    }
  }
`;

const Resume = ({ pageTitle }) => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide web design and development, from prototyping and wireframing to UI development. I make sure to write good, scalable, clean and easy to maintain code.`;
  const buttonText = `Are you hiring?`;

  useEffect(() => {
    document.title = `rofazayn | ${pageTitle}`;
  });

  return (
    <SResume className='page'>
      <Container>
        <div className='top'>
          <Hero
            pageTitle={pageTitle + '.'}
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
