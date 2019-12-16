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
  { path: '/', name: 'Home', Component: Home },
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire }
];

function App() {
  useEffect(() => {
    gsap.to('.App', 2, { opacity: 1, delay: 1, ease: 'power3.Out' });
  });
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Container>
          {routes.map(({ name, path, Component }) => (
            <Route exact path={path} key={name}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={3000}
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
