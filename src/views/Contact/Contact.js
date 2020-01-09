import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import contactImage from '../../assets/images/06.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import ContactForm from '../../components/ContactForm/ContactForm';

const SContact = styled.main`
  width: 100%;
`;

const Contact = ({ pageTitle }) => {
  const line1 = `Reach me out?`;
  const line2 = `Send me an email.`;
  const paragraph = `Looking to hire? or you are just interested in what I do? Awesome, feel free to contact me by filling the form below, I typically within a day, if I don't then please be patient.`;
  const buttonText = `Back to the homepage`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SContact>
      <Container>
        <div className='top --no-reverse'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={buttonText}
              buttonPath={'/'}
            />
          </div>
          <div className='section'>
            <ContactForm />
          </div>
        </div>
      </Container>
    </SContact>
  );
};

export default Contact;
