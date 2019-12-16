import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.scss';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import BackgroundText from './components/BackgroundText/BackgroundText';
import Resume from './views/Resume/Resume';
import Contact from './views/Contact/Contact';
import Hire from './views/Hire/Hire';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire }
];

function App() {
  return (
    <>
      <BackgroundText />
      <Navbar />
      <Wrapper>
        <Container>
          {routes.map(({ name, path, Component }) => (
            <Route exact path={path} key={name}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames='page'
                  // onExit={onExit}
                  // onEntering={onEnter}
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
    </>
  );
}

export default withRouter(App);
