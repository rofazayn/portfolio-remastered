import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Contact from './views/Contact/Contact';
import Hire from './views/Hire/Hire';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';
import Page from './components/Page/Page';

const routes = [
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire },
  { path: '/home', name: 'Home', Component: Home }
];

function App({ history, location }) {
  useEffect(() => {
    gsap.set('.App', {
      visibility: 'visible'
    });
  });

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/home');
    }
  });

  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        {routes.map(({ name, path, Component }) => (
          <Route path={path} exact key={name}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames='page'
                unmountOnExit
              >
                <Page>
                  <Component />
                </Page>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default withRouter(App);
