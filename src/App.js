import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.scss';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Contact from './views/Contact/Contact';
import Hire from './views/Hire/Hire';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';

const routes = [
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire },
  { path: '/', name: 'Home', Component: Home }
];

function App() {
  useEffect(() => {
    gsap.to('.App', 1, { opacity: 1, delay: 1, ease: 'power3.inOut' });
  });
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Container>
          {routes.map(({ name, path, Component }) => (
            <Route path={path} exact key={name}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1300}
                  classNames='page'
                  unmountOnExit
                >
                  <div className='page'>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Redirect to='/' />
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default withRouter(App);
