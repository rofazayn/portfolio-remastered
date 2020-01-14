import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import resumeImage from '../../assets/images/05.png';
import profileImage from '../../assets/images/profile.jpg';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';

const SResume = styled.div`
  width: 100%;
  .rofa {
    display: flex;
    justify-items: space-between;
    align-items: center;
    @media (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
    }

    .item {
      &:first-of-type {
        margin-inline-end: 5rem;
        @media (max-width: 768px) {
          margin-inline-end: 0;
          margin-block-end: 2rem;
        }
      }
      img {
        width: 100%;
        max-width: 400px;
      }
    }
  }
  .skills {
    padding: 10rem 0;
    margin: 0 auto;
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }
`;

const Resume = ({ pageTitle }) => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide web design and development, from prototyping and wireframing to development. I make sure to write good, scalable, clean and easy to maintain code.`;
  // const buttonText = `Are you hiring?`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SResume>
      <Container>
        <div className='top'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={''}
              buttonPath={'/hire'}
            />
          </div>
          <div className='section'>
            <Image src={resumeImage} />
          </div>
        </div>
        <div className='mid'>
          <div className='rofa'>
            <div className='item'>
              <img src={profileImage} alt='Abderraouf Zine' />
            </div>
            <div className='item'>
              <Title pageTitle>About me.</Title>
              <Title sectionTitle>
                <div className='line-wrapper'>
                  <div className='line'>I'm Abderraouf..</div>
                </div>
                <div className='line-wrapper'>
                  <div className='line'>You can call me Rofa.</div>
                </div>
              </Title>
              <Paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident, cupiditate unde commodi temporibus ipsa quam soluta!
                Repellendus, eaque possimus perspiciatis, quisquam suscipit
                facilis impedit laboriosam eius, omnis adipisci nam rerum?
              </Paragraph>
            </div>
          </div>
          <div className='skills'>
            <Title pageTitle>My skills.</Title>
            <Title sectionTitle>
              <div className='line-wrapper'>
                <div className='line'>Front-end or back-end?!</div>
              </div>
              <div className='line-wrapper'>
                <div className='line'>Well, I work with both ends.</div>
              </div>
            </Title>
            <Paragraph>
              I started my journey as a front-end developer, I have always paid
              attention to details, and the little things that eventually create
              something beautfiul are always interesting to me, but that wasn't
              for long, life happened, and I had to learn back-end technologies
              too, in order to land a job and support myself and my family.
            </Paragraph>
          </div>
        </div>
      </Container>
    </SResume>
  );
};

export default Resume;
