import React, { useEffect } from 'react';
import Image from '../../components/Image/Image';
import resumeImage from '../../assets/images/05.png';
import profileImage from '../../assets/images/profile.jpg';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
import {
  htmlImage,
  cssImage,
  javascriptImage,
  reactImage,
  sassImage,
  nodejsImage,
  scomponentsImage,
  gatsbyImage,
  laravelImage,
  postgresqlImage,
  mongodbImage,
  vscodeImage,
  postmanImage,
  gitImage,
  adobexdImage,
  adobeIllustratorImage,
  githubImage
} from './resumeAssets';
import SResume from './ResumeStyled';

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
              scroller
            />
          </div>
          <div className='section'>
            <Image src={resumeImage} />
          </div>
        </div>
        <div className='mid' id='mid'>
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
            <div className='skills__header'>
              <Title pageTitle>Skills.</Title>
              <Title sectionTitle>
                <div className='line-wrapper'>
                  <div className='line'>Front-end or back-end?!</div>
                </div>
                <div className='line-wrapper'>
                  <div className='line'>Well, I work with both ends.</div>
                </div>
              </Title>
              <Paragraph>
                I started my journey as a front-end developer, I have always
                paid attention to details, and the little things that eventually
                create something beautfiul are always interesting to me, but
                that wasn't for long, life happened, and I had to learn back-end
                technologies too, in order to land a job and support myself and
                my family.
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
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={cssImage} alt='CSS' />
                    <h4 className='item__title'>CSS</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={javascriptImage} alt='JavaScript' />
                    <h4 className='item__title'>JavaScript</h4>
                    <p className='item__level'>Great</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={reactImage} alt='ReactJS' />
                    <h4 className='item__title'>ReactJS</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={sassImage} alt='Sass' />
                    <h4 className='item__title'>Sass</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={gatsbyImage} alt='Gatsby' />
                    <h4 className='item__title'>Gatsby</h4>
                    <p className='item__level'>Good</p>
                  </li>
                </ul>
              </div>
              <div className='skills__list__set'>
                <h3>Back-end technologies.</h3>
                <ul>
                  <li className='item'>
                    <img src={nodejsImage} alt='NodeJS' />
                    <h4 className='item__title'>NodeJS</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={mongodbImage} alt='MongoDB' />
                    <h4 className='item__title'>MongoDB</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={laravelImage} alt='Laravel' />
                    <h4 className='item__title'>Laravel</h4>
                    <p className='item__level'>Good</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={postgresqlImage} alt='PostgreSQL' />
                    <h4 className='item__title'>PostgreSQL</h4>
                    <p className='item__level'>Good</p>
                  </li>
                </ul>
              </div>
              <div className='skills__list__set'>
                <h3>Software & tools.</h3>
                <ul>
                  <li className='item'>
                    <img src={vscodeImage} alt='VSCode' />
                    <h4 className='item__title'>VSCode</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={gitImage} alt='Git' />
                    <h4 className='item__title'>Git</h4>
                    <p className='item__level'>Good</p>
                  </li>
                  <li className='item'>
                    <img src={postmanImage} alt='Postman' />
                    <h4 className='item__title'>Postman</h4>
                    <p className='item__level'>Great</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={adobexdImage} alt='Adobe XD' />
                    <h4 className='item__title'>Adobe XD</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={adobeIllustratorImage} alt='Adobe AI' />
                    <h4 className='item__title'>Adobe AI</h4>
                    <p className='item__level'>Good</p>
                  </li>
                  <li className='item'>
                    <img src={githubImage} alt='GitHub' />
                    <h4 className='item__title'>GitHub</h4>
                    <p className='item__level'>Good</p>
                  </li>
                </ul>
              </div>
              <div className='skills__list__set'>
                <h3>I do use these as well...</h3>
                <ul>
                  <li className='item'>
                    <img src={adobexdImage} alt='GraphQL' />
                    <h4 className='item__title'>GraphQL</h4>
                    <p className='item__level'>Basic</p>
                  </li>
                  <li className='item'>
                    <img src={adobexdImage} alt='Apollo JS' />
                    <h4 className='item__title'>Apollo JS</h4>
                    <p className='item__level'>Basic</p>
                  </li>
                  <li className='item'>
                    <img src={adobexdImage} alt='Socket IO' />
                    <h4 className='item__title'>Socket IO</h4>
                    <p className='item__level'>Basic</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={adobexdImage} alt='Jest JS' />
                    <h4 className='item__title'>Jest JS</h4>
                    <p className='item__level'>Basic</p>
                  </li>
                  <li className='item'>
                    <img src={adobexdImage} alt='Redux' />
                    <h4 className='item__title'>Redux</h4>
                    <p className='item__level'>Great</p>
                  </li>
                  <li className='item'>
                    <img src={adobexdImage} alt='Firebase' />
                    <h4 className='item__title'>Firebase</h4>
                    <p className='item__level'>Good</p>
                  </li>
                </ul>
                <ul>
                  <li className='item'>
                    <img src={adobexdImage} alt='Webpack' />
                    <h4 className='item__title'>Webpack</h4>
                    <p className='item__level'>Basic</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SResume>
  );
};

export default Resume;
