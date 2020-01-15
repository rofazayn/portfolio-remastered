import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Image from '../../components/Image/Image';
// import contactImage from '../../assets/images/06.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import ContactForm from '../../components/ContactForm/ContactForm';

const SContact = styled.main`
  width: 100%;
  .section {
    display: block !important;
  }
`;

const Contact = ({ pageTitle }) => {
  const line1 = `Get in touch..`;
  const line2 = `Send me an email.`;
  const paragraph = `Looking to hire? or you're just interested in what I do? Awesome, feel free to contact me by filling the form, I typically reply within a day, so please be patient.`;
  // const buttonText = `Back to the homepage`;
  const extra = `Or contact me via Twitter, you can find me by clicking on the twitter icon down there in the footer section.`;

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
              buttonText={''}
              buttonPath={'/'}
              extra={extra}
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
