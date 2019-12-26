import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { revealImage } from '../../helpers/Animations';

const SImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  opacity: 0;
  display: flex;
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
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
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    img {
      object-fit: cover;
      /* width: calc((40vh + 40vw) / 2); */
      width: 100%;
      max-width: 600px;
      min-width: 256px;
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
