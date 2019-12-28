import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import ProjectsImage from '../../assets/images/04.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';

const SProjects = styled.main`
  width: 100%;

  .placeholder {
    width: 100%;
    background: ${({ theme }) => theme.colors.vein};
    min-height: 300px;
    display: flex;
    margin-bottom: 2rem;
  }
`;

const Projects = ({ pageTitle }) => {
  const line1 = `Hmm.. projects?`;
  const line2 = `I have done plenty!`;
  const paragraph = `I delivered more than 50 projects to individuals, startups, small businesses and even established companies, below are some side projects as demonstations of my skills.`;
  const buttonText = `Check out my resume`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SProjects>
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
          <Title pageTitle>Showcases.</Title>
          <div className='section'>
            <Title sectionTitle>
              <div className='line-wrapper'>
                <div className='line'>Every project listed</div>
              </div>
              <div className='line-wrapper'>
                <div className='line'>below is selected carefully!</div>
              </div>
            </Title>
            <Paragraph>
              Every single project listed below, is selected carefully to
              demonstrate a certain amount of skills, and is a personal project
              that is built for the sake of this portfolio website, feel free to
              check out the code on GitHub, or watch me build it on my YouTube
              channel.
            </Paragraph>
          </div>
          <div className='section'>
            <div className='placeholder'></div>
            <div className='placeholder'></div>
          </div>
        </div>
      </Container>
    </SProjects>
  );
};

export default Projects;
