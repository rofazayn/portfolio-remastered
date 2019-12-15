import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import BackgroundText from './components/BackgroundText/BackgroundText';
import Resume from './views/Resume/Resume';
import Contact from './views/Contact/Contact';

function App() {
  return (
    <>
      <BackgroundText />
      <Wrapper>
        <Container>
          <Navbar />
        </Container>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/' />
          </Switch>
        </Container>
        <Container>
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
