import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Contact from './views/Contact/Contact';
import Hire from './views/Hire/Hire';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';
import Projects from './views/Projects/Projects';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/theming/theme.js';
import { useSelector } from 'react-redux';
import SApp from './AppStyled.js';

const routes = [
  { path: '/home', name: 'Home', Component: Home },
  { path: '/projects', name: 'Projects', Component: Projects },
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

  const isDarkTheme = useSelector(state => state.ui.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <SApp className='App'>
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
      </SApp>
    </ThemeProvider>
  );
}

export default withRouter(App);
