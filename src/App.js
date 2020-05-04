import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { lightTheme, darkTheme } from './assets/theming/theme.js';
import { useSelector } from 'react-redux';
import routes from './helpers/routes.js';
import Page from './components/Page/Page';
// import SmoothScroller from './components/SmoothScroller/SmoothScroller';
import GlobalStyle from './helpers/GlobalStyles';
import { muiThemeDark, muiThemeLight } from './assets/theming/muiTheme';

function App({ history, location }) {
  // const [isImagesLoaded, setIsImagesLoaded] = useState(true);
  // Set my app to visible
  useEffect(() => {
    gsap.set('.App', {
      visibility: 'visible',
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Redirect to home when component mounts and path is /
    if (location.pathname === '/') {
      history.push('/home');
    }
  }, [location, history]);

  const isDarkTheme = useSelector((state) => state.ui.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <MuiThemeProvider theme={isDarkTheme ? muiThemeDark : muiThemeLight}>
        <GlobalStyle />
        <div className='App'>
          <Navbar />
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
          <Footer />
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default withRouter(App);
