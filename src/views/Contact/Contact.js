import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import contactImage from '../../assets/images/06.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SContact = styled.main`
  width: 100%;
`;

const Contact = ({ pageTitle }) => {
  const line1 = `Feel free to contact`;
  const line2 = `me at anytime.`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
  const buttonText = `Back to the homepage`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SContact>
      <Container>
        <div className='top'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              // buttonText={''}
              buttonPath={'/'}
            />
          </div>
          <div className='section'>
            <Image src={contactImage} />
          </div>
        </div>
      </Container>
    </SContact>
  );
};

export default Contact;
