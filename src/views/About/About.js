import React, { useEffect } from 'react';
import Image from '../../components/Image/Image';
import resumeImage from '../../assets/images/05.png';
import profileImage from '../../assets/images/profile.jpg';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
// import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import {
  htmlImage,
  cssImage,
  javascriptImage,
  reactImage,
  sassImage,
  nodejsImage,
  scomponentsImage,
  gatsbyImage,
  mongodbImage,
  vscodeImage,
  postmanImage,
  gitImage,
  adobexdImage,
  adobeIllustratorImage,
  githubImage,
  graphqlImage,
  firebaseImage,
  reduxImage,
  jestImage,
  webpackImage,
  socketioImage,
  apolloImage,
  npmImage,
  expressImage
} from './aboutAssets';
import SAbout from './AboutStyled';
import { ReactComponent as ExternalLinkIcon } from '../../assets/icons/external-link.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Resume = ({ pageTitle }) => {
  const line1 = `Years of exp`;
  const line2 = `at your service.`;
  const paragraph = `I provide web design and development, from prototyping and wireframing to development. I make sure to write good, scalable, clean and easy to maintain code.`;
  // const buttonText = `Are you hiring?`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SAbout>
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
              scroller
              scrollButtonText='A little info about me'
            />
          </div>
          <div className='section'>
            <Image src={resumeImage} />
          </div>
        </div>
        <div className='mid' id='mid'>
          <div className='rofa'>
            <div className='item '>
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
                My name is Abderraouf Zine (Phonetic spelling: Abd'Rauf Zayn), I
                am 21 years old from the Aurès, Algeria. I'm a computer science
                sophomore, I started teaching myself how to code years ago and I
                ended up walking the web development path, I've also worked for
                a decent amount of time as a freelancer. Lately, I've been
                focusing more on landing a full-time position as a remote web
                developer.
              </Paragraph>
              <Button
                variant='outlined'
                color='primary'
                endIcon={<ExternalLinkIcon width='16px' />}
                href={process.env.PUBLIC_URL + '/docs/resume-not-ready.pdf'}
                target='_blank'
                size='large'
                className='custom-button'
              >
                Open resume pdf file
              </Button>
            </div>
          </div>
          <div className='skills'>
            <div className='skills__header'>
              <Title pageTitle>Skills.</Title>
              <Title sectionTitle>
                <div className='line-wrapper'>
                  <div className='line'>Front-end or Back-end?!</div>
                </div>
                <div className='line-wrapper'>
                  <div className='line'>I 'm experienced with both.</div>
                </div>
              </Title>
              <Paragraph>
                Here you will find a showcase of some of the technologies I work
                with / used before and how good am I with that certain
                technology.
              </Paragraph>
            </div>
            <div className='skills__list'>
              {/* <Title pageTitle>Front-end.</Title> */}
              <div className='skills__list__set'>
                <h3>Front-end technologies.</h3>
                <ul>
                  <li className='item'>
                    <img src={htmlImage} alt='HTML' />
                    <h4 className='item__title'>HTML</h4>
                    <p className='item__level'>Expert</p>
                  </li>
                  <li className='item'>
                    <img src={cssImage} alt='CSS' />
                    <h4 className='item__title'>CSS</h4>
                    <p className='item__level'>Expert</p>
                  </li>
                  <li className='item'>
                    <img src={javascriptImage} alt='JavaScript' />
                    <h4 className='item__title'>JavaScript</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={reactImage} alt='ReactJS' />
                    <h4 className='item__title'>React JS</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                  <li className='item'>
                    <img src={sassImage} alt='Sass' />
                    <h4 className='item__title'>Sass</h4>
                    <p className='item__level'>Expert</p>
                  </li>
                  <li className='item'>
                    <img src={gatsbyImage} alt='Gatsby' />
                    <h4 className='item__title'>Gatsby</h4>
                    <p className='item__level'>Competent</p>
                  </li>
                </ul>
              </div>
              <div className='skills__list__set'>
                <h3>Back-end technologies.</h3>
                <ul>
                  <li className='item'>
                    <img src={nodejsImage} alt='NodeJS' />
                    <h4 className='item__title'>Node JS</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                  <li className='item'>
                    <img src={expressImage} alt='Express JS' />
                    <h4 className='item__title'>Express JS</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                  <li className='item'>
                    <img src={mongodbImage} alt='MongoDB' />
                    <h4 className='item__title'>MongoDB</h4>
                    <p className='item__level'>Competent</p>
                  </li>
                </ul>
              </div>
              <div className='skills__list__set'>
                <h3>Software & tools.</h3>
                <ul>
                  <li className='item'>
                    <img src={vscodeImage} alt='VSCode' />
                    <h4 className='item__title'>VSCode</h4>
                    <p className='item__level'>Expert</p>
                  </li>
                  <li className='item'>
                    <img src={gitImage} alt='Git' />
                    <h4 className='item__title'>Git</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                  <li className='item'>
                    <img src={postmanImage} alt='Postman' />
                    <h4 className='item__title'>Postman</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={adobexdImage} alt='Adobe XD' />
                    <h4 className='item__title'>Adobe XD</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                  <li className='item'>
                    <img src={adobeIllustratorImage} alt='Adobe AI' />
                    <h4 className='item__title'>Adobe AI</h4>
                    <p className='item__level'>Competent</p>
                  </li>
                  <li className='item'>
                    <img src={githubImage} alt='GitHub' />
                    <h4 className='item__title'>GitHub</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                </ul>
              </div>
              <div className='skills__list__set'>
                <h3>I do use these as well...</h3>
                <ul>
                  <li className='item'>
                    <img src={graphqlImage} alt='GraphQL' />
                    <h4 className='item__title'>GraphQL</h4>
                    <p className='item__level'>Beginner</p>
                  </li>
                  <li className='item'>
                    <img src={apolloImage} alt='Apollo JS' />
                    <h4 className='item__title'>Apollo JS</h4>
                    <p className='item__level'>Beginner</p>
                  </li>
                  <li className='item'>
                    <img src={socketioImage} alt='Socket IO' />
                    <h4 className='item__title'>Socket IO</h4>
                    <p className='item__level'>Beginner</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={jestImage} alt='Jest JS' />
                    <h4 className='item__title'>Jest JS</h4>
                    <p className='item__level'>Beginner</p>
                  </li>
                  <li className='item'>
                    <img src={reduxImage} alt='Redux' />
                    <h4 className='item__title'>Redux</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                  <li className='item'>
                    <img src={firebaseImage} alt='Firebase' />
                    <h4 className='item__title'>Firebase</h4>
                    <p className='item__level'>Competent</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={webpackImage} alt='Webpack' />
                    <h4 className='item__title'>Webpack</h4>
                    <p className='item__level'>Beginner</p>
                  </li>
                  <li className='item'>
                    <img src={scomponentsImage} alt='SComponents' />
                    <h4 className='item__title'>SComponents</h4>
                    <p className='item__level'>Expert</p>
                  </li>
                  <li className='item'>
                    <img src={npmImage} alt='NPM' />
                    <h4 className='item__title'>NPM</h4>
                    <p className='item__level'>Proficient</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bot'>
          <div className='cta'>
            <Title sectionTitle>
              <div className='line-wrapper'>
                <div className='line'>Looking for projects?</div>
              </div>
              <div className='line-wrapper'>
                <div className='line'>I prepared some for you!</div>
              </div>
            </Title>
            <Paragraph className='text'>
              The projects I am going to show you are not real world
              applications, they are just personal projects that act like
              demonstrations of a skill or a certain amount of skills.
            </Paragraph>
            <Button
              variant='outlined'
              component={Link}
              to='/projects'
              endIcon={<ArrowRightIcon width='16px' />}
              size='large'
              className='custom-button'
            >
              Have a look
            </Button>
          </div>
        </div>
      </Container>
    </SAbout>
  );
};

export default Resume;
