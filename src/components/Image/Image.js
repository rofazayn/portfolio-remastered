import React, { useRef } from 'react';
import styled from 'styled-components';
import { revealImage } from '../../helpers/Animations';

const SImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  @media (max-height: 800px) {
    margin-bottom: 1.5rem;
    max-width: 350px;
  }
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  display: flex;
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    min-height: auto;
  }
  .background-layer1 {
    position: absolute;
    background: ${({ theme }) => theme.colors.background};
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .background-layer2 {
    position: absolute;
    background: ${({ theme }) => theme.colors.vein};
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
  }
  .image-layer {
    width: 100%;
    height: 100%;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      justify-content: flex-start;
      align-items: flex-start;
    }
    img {
      object-fit: cover;
      width: 100%;
      filter: ${({ theme }) => theme.imageBrightness};
      transition: filter ease-in-out 400ms;
      @media (max-width: 768px) {
        width: 100%;
      }
      max-width: 500px;
      min-width: 256px;
    }
  }
`;

const Image = ({ src }) => {
  let background1 = useRef(null);
  let background2 = useRef(null);
  let image = useRef(null);

  const reveal = () => {
    revealImage(background1, background2, image);
  };

  return (
    <SImage>
      <div className='background-layer1' ref={el => (background1 = el)}></div>
      <div className='background-layer2' ref={el => (background2 = el)}></div>
      <div className='image-layer'>
        <img src={src} alt='Hero' onLoad={reveal} ref={el => (image = el)} />
      </div>
    </SImage>
  );
};

export default Image;
