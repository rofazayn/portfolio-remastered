import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SProjects = styled.main`
  width: 100%;
`;

const Projects = () => {
  const line1 = `Projects, Oh projects!`;
  // const line2 = `Here are some for you`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`;
  const buttonText = `Check out my resume`;

  return (
    <SProjects className='page'>
      <Container>
        <div className='top'>
          <Hero
            line1={line1}
            // line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/resume'}
          />
        </div>
      </Container>
    </SProjects>
  );
};

export default Projects;
