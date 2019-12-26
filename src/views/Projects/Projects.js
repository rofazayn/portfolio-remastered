import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import ProjectsImage from '../../assets/images/04.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SProjects = styled.main`
  width: 100%;
`;

const Projects = ({ pageTitle }) => {
  const line1 = `Hmm.. projects?`;
  const line2 = `I have done plenty!`;
  const paragraph = `I delivered more than 50 projects to individuals, startups, small businesses and even established companies, below are some side projects as demonstations of my skills.`;
  const buttonText = `Check out my resume`;

  useEffect(() => {
    document.title = `rofazayn | ${pageTitle}`;
  });

  return (
    <SProjects className='page'>
      <Container>
        <div className='top'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={buttonText}
              buttonPath={'/resume'}
            />
          </div>
          <div className='section'>
            <Image src={ProjectsImage} />
          </div>
        </div>
        <div className='mid'>
          <div className='upper'>
            <small>Lorem.</small>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              unde deleniti ipsum ducimus pariatur eum quaerat est repellendus
              adipisci sit? Modi laborum maiores est cumque?
            </p>
          </div>
        </div>
      </Container>
    </SProjects>
  );
};

export default Projects;
