import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import hireImage from '../../assets/images/09.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SHire = styled.main`
  width: 100%;
`;

const Hire = ({ pageTitle }) => {
  const line1 = `Looking to hire?`;
  const line2 = `let's talk about it!`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
  const buttonText = `Send me an email`;

  useEffect(() => {
    document.title = `rofazayn | ${pageTitle}`;
  });

  return (
    <SHire className='page'>
      <Container>
        <div className='top'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={buttonText}
              buttonPath={'/contact'}
            />
          </div>
          <div className='section'>
            <Image src={hireImage} />
          </div>
        </div>
      </Container>
    </SHire>
  );
};

export default Hire;
