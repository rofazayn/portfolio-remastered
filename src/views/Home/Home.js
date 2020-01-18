import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import homeImage from '../../assets/images/03.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
// import Paragraph from '../../components/Paragraph/Paragraph';
// import Title from '../../components/Title/Title';
// import { Link } from 'react-router-dom';
import { ReactComponent as CoffeeIcon } from '../../assets/icons/coffee.svg';

const SHome = styled.div`
  .mid {
    .about {
      display: grid;
      grid-column-gap: 6rem;
      grid-row-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      a {
        text-decoration: underline;
        transition: all ease-in-out 250ms;
        font-weight: 700;
        &:hover {
          color: ${({ theme }) => theme.colors.artery};
        }
      }
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      .item {
        .counter {
          font-size: 3rem;
          @media (max-width: 1200px) {
            font-size: 2.75rem;
          }
          @media (max-width: 992px) {
            font-size: 2.5rem;
          }
          @media (max-width: 768px) {
            font-size: 2.25rem;
          }
          @media (max-width: 576px) {
            font-size: 2rem;
          }
          color: ${({ theme }) => theme.colors.artery};
          font-family: 'Alegreya';
        }
        .text {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;

const Home = ({ pageTitle }) => {
  // Page content
  const line1 = `Welcome to my`;
  const line2 = `personal portfolio.`;
  const paragraph = `My name is Abderraouf. I'm a web developer from Algeria. Sometimes I design stuff, and some other times I code them, I just love what I do.`;
  // const buttonText = `See some stuff I built`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SHome>
      <Container>
        <div className='top --reverse-row'>
          <div className='section'>
            <Hero
              pageTitle={pageTitle + '.'}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={`Let's start exploring`}
              buttonPath={'/about'}
              buttonIcon={<CoffeeIcon width='18px' />}
            />
          </div>
          <div className='section'>
            <Image src={homeImage} />
          </div>
        </div>
        {/* <div className='mid' id='mid'>
          <Title pageTitle>About.</Title>
          <div className='about'>
            <div className='item'>
              <div className='counter'>3+</div>
              <Title itemTitle>Years' experience.</Title>
              <Paragraph>
                In 2010, I wrote my first HTML line. In 2011 I joined codecademy
                at its earliest starts and became a junior front-end developer
                with a descent knowledge of HTML, CSS & JavaScript. In 2013, I
                was able to build websites for local businesses and companies.
              </Paragraph>
            </div>
            <div className='item'>
              <div className='counter'>50+</div>
              <Title itemTitle>Projects completed.</Title>
              <Paragraph>
                Through my freelance journey, I delivered more than 50 complete
                projects, from web design to UI development, I did it all. With
                more than 5 years of freelancing (Late 2013 - Late 2018), I
                dealt with impossible deadlines. Get stuff done on time is a way
                of life for me.
              </Paragraph>
            </div>
            <div className='item'>
              <div className='counter'>1200+</div>
              <Title itemTitle>Github contributions.</Title>
              <Paragraph>
                I love Git version control. And I show that love by contributing
                daily to GitHub. Though, I keep my repositories private due to
                secrecy agreements that I sign with my employers. But, I have
                side projects that you can check out in the{' '}
                <Link to='/projects'>Projects</Link> section.
              </Paragraph>
            </div>
          </div>
        </div> */}
      </Container>
    </SHome>
  );
};

export default Home;
