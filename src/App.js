import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Contact from './views/Contact/Contact';
import Hire from './views/Hire/Hire';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';

const routes = [
  { path: '/home', name: 'Home', Component: Home },
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire }
];

function App({ history, location }) {
  useEffect(() => {
    gsap.set('.App', {
      visibility: 'visible'
    });
  });

  useEffect(() => {
    // Redirect to home when component mounts and path is /
    if (location.pathname === '/') {
      history.push('/home');
    }
  }, [location, history]);

  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Switch>
          {routes.map(({ name, path, Component }) => (
            <Route path={path} exact key={name}>
              <Component />
            </Route>
          ))}
          <Redirect to='/' />
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default withRouter(App);
