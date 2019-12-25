import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { revealImage } from '../../helpers/Animations';

const SImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  opacity: 0;
  @media (max-width: 1200px) {
    max-width: 475px;
    height: 475px;
  }
  @media (max-width: 992px) {
    max-width: 450px;
    height: 450px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    height: 400px;
    margin: 2rem 0;
  }
  @media (max-width: 576px) {
    max-width: 300px;
    height: 300px;
  }
  @media (max-width: 420px) {
    max-width: 220px;
    height: 220px;
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
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;

const Image = ({ src }) => {
  let background1 = useRef(null);
  let background2 = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    revealImage(background1, background2, image);
  }, [background1, background2, image]);

  return (
    <SImage>
      <div className='background-layer1' ref={el => (background1 = el)}></div>
      <div className='background-layer2' ref={el => (background2 = el)}></div>
      <div className='image-layer'>
        <img src={src} alt='Hero' ref={el => (image = el)} />
      </div>
    </SImage>
  );
};

export default Image;
