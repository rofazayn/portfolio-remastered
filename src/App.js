import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/theming/theme.js';
import { useSelector } from 'react-redux';
import routes from './helpers/routes.js';
import Page from './components/Page/Page';
import SmoothScroller from './components/SmoothScroller/SmoothScroller';
import GlobalStyle from './helpers/GlobalStyles';

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

  const isDarkTheme = useSelector(state => state.ui.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {/* <ThemeProvider theme={lightTheme}> */}
      <GlobalStyle />

      <div className='App'>
        <Navbar />
        <SmoothScroller>
          <Wrapper>
            <Page>
              <Switch>
                {routes.map(({ name, path, Component }) => (
                  <Route path={path} exact key={name}>
                    <Component pageTitle={name} />
                  </Route>
                ))}
                <Redirect to='/' />
              </Switch>
            </Page>
          </Wrapper>
        </SmoothScroller>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default withRouter(App);
