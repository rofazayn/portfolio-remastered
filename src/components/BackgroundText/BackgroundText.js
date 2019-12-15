import React from 'react';
import styled from 'styled-components';

const SBackgroundText = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  span {
    font-size: 400px;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    opacity: 2%;
    line-height: 0.85;
    &.one {
      transform: translateX(3300px);
    }
    &.two {
      transform: translateX(500px);
    }
    &.three {
      transform: translateX(-3300px);
    }
  }
`;

const BackgroundText = () => {
  return (
    <SBackgroundText>
      <span className='one'>Beauty is in the eye of the beholder</span>
      <span className='two'>Beauty is in the eye of the beholder</span>
      <span className='three'>Beauty is in the eye of the beholder</span>
    </SBackgroundText>
  );
};

export default BackgroundText;
