import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';

function App() {
  return (
    <Wrapper>
      <Container>
        <Navbar />
      </Container>
      {/* <h1>Hello world</h1> */}
    </Wrapper>
  );
}

export default App;
