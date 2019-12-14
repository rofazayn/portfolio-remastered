import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './views/Home/Home';

function App() {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Container>
    </Wrapper>
  );
}

export default App;
