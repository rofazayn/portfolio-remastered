import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SquareIcon } from '../../assets/icons/square.svg';
import Button from '../../components/Button/Button';

const SHome = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 380px;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    max-width: 540px;
    line-height: 2;
    margin-bottom: 50px;
  }

  align-items: flex-start;
`;

const Home = () => {
  return (
    <SHome>
      <h1>Welcome to my humble portfolio.</h1>
      <p>
        Hi. My name is Abderraouf. I am a front-end web developer from the Chawi
        Amazigh lands. Please take a look around and discover what I can offer
        for you, you business or your company.
      </p>
      <Button>
        <div className='icon'>
          <SquareIcon />
        </div>{' '}
        Check my showcases
      </Button>
    </SHome>
  );
};

export default Home;
