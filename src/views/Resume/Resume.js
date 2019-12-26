import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import resumeImage from '../../assets/images/05.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import { setWrapperHeight } from '../../redux/actions/ui.actions';
import { useDispatch } from 'react-redux';

const SResume = styled.div`
  width: 100%;
`;

const Resume = ({ pageTitle }) => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide web design and development, from prototyping and wireframing to UI development. I make sure to write good, scalable, clean and easy to maintain code.`;
  const buttonText = `Are you hiring?`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  const dispatch = useDispatch();

  // Calculate page height
  let page = useRef(null);

  useEffect(() => {
    dispatch(setWrapperHeight(page.clientHeight));
  });

  return (
    <SResume ref={el => (page = el)} className='page'>
      <Container>
        <div className='top'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={buttonText}
              buttonPath={'/hire'}
            />
          </div>
          <div className='section'>
            <Image src={resumeImage} />
          </div>
        </div>
      </Container>
    </SResume>
  );
};

export default Resume;
