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
import Loader from './components/Loader/Loader';

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
  const isLoading = useSelector(state => state.ui.isLoading);

  useEffect(() => console.log(isLoading), [isLoading]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {isLoading ? (
        <Loader />
      ) : (
        <SApp className='App'>
          <Navbar />
          <Wrapper>
            <Switch>
              {routes.map(({ name, path, Component }) => (
                <Route path={path} exact key={name}>
                  <Component pageTitle={name} />
                </Route>
              ))}
              <Redirect to='/' />
            </Switch>
          </Wrapper>
          <Footer />
        </SApp>
      )}
    </ThemeProvider>
  );
}

export default withRouter(App);
