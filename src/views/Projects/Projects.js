import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import ProjectsImage from '../../assets/images/04.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
  const paragraph = `I delivered more than 50 projects to individuals, startups, small businesses and even established companies, below are some personal projects to review.`;
  // const buttonText = `Check out my resume`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SProjects>
      <Container>
        <div className='top --reverse-row'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={''}
              buttonPath={'/resume'}
              scroller
              scrollButtonText='Check out my projects'
            />
          </div>
          <div className='section'>
            <Image src={ProjectsImage} />
          </div>
        </div>
        <div className='mid' id='mid'>
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
            <div className='placeholder'></div>
            <div className='placeholder'></div>
            <div className='placeholder'></div>
          </div>
        </div>
        <div className='bot'>
          <div className='cta'>
            <Title sectionTitle>
              <div className='line-wrapper'>
                <div className='line'>You like what you see?</div>
              </div>
              <div className='line-wrapper'>
                <div className='line'>Have a look at my resume.</div>
              </div>
            </Title>
            <Paragraph className='text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus amet pariatur suscipit voluptatem rerum autem neque
              voluptates et praesentium doloremque!
            </Paragraph>
            <Button
              variant='outlined'
              component={Link}
              to='/resume'
              endIcon={<ArrowRightIcon width='16px' />}
            >
              Go to resume page
            </Button>
          </div>
        </div>
      </Container>
    </SProjects>
  );
};

export default Projects;
