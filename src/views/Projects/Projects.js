import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import ProjectsImage from '../../assets/images/04.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SProjects = styled.main`
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

const Projects = ({ pageTitle }) => {
  const line1 = `Projects, Oh projects!`;
  // const line2 = `Here are some for you`;
  const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
  const buttonText = `Check out my resume`;

  useEffect(() => {
    document.title = `rofazayn | ${pageTitle}`;
  });

  return (
    <SProjects className='page'>
      <Container>
        <div className='top'>
          <Hero
            pageTitle={pageTitle + '.'}
            line1={line1}
            // line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/resume'}
          />
          <Image src={ProjectsImage} />
        </div>
      </Container>
    </SProjects>
  );
};

export default Projects;
