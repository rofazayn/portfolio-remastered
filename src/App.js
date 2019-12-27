import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/theming/theme.js';
import { useSelector } from 'react-redux';
import SApp from './AppStyled.js';
import routes from './helpers/routes.js';
import { useTransition, animated, config } from 'react-spring';

function App({ history, location }) {
  // Set my app to visible
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

  // Page transitions
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
    leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
    config:
      // duration: 1000,
      config.slow
  });

  const isDarkTheme = useSelector(state => state.ui.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <SApp className='App'>
        <Navbar />
        <Wrapper>
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                {routes.map(({ name, path, Component }) => (
                  <Route path={path} exact key={name}>
                    <Component pageTitle={name} />
                  </Route>
                ))}
                <Redirect to='/' />
              </Switch>
            </animated.div>
          ))}
        </Wrapper>
        <Footer />
      </SApp>
    </ThemeProvider>
  );
}

export default withRouter(App);
