import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Wrapper>
      <Container>
        <Navbar />
      </Container>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Container>
      <Container>
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default App;
