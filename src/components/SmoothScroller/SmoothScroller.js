import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const SmoothScroller = ({ children }) => {
  const html = document.documentElement;
  const body = document.body;

  let scrollContainer = useRef(null);

  const scroller = {
    // target: document.querySelector('#scroll-container'),
    target: scrollContainer,
    ease: 0.1, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0
  };

  let requestId = null;

  gsap.set(scroller.target.current, {
    rotation: 0.01,
    force3D: true
  });

  const updateScroller = () => {
    let resized = scroller.resizeRequest > 0;

    if (resized) {
      let height = scroller.target.current.clientHeight;
      body.style.height = height + 'px';
      scroller.resizeRequest = 0;
    }

    let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }

    gsap.set(scroller.target.current, {
      y: -scroller.y
    });

    requestId =
      scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  };

  const onScroll = () => {
    scroller.scrollRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  };

  const onResize = () => {
    scroller.resizeRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  };

  const onLoad = () => {
    updateScroller();
    window.focus();
    window.addEventListener('resize', onResize);
    document.addEventListener('scroll', onScroll);
  };

  useEffect(() => {
    onLoad();
  });

  return (
    <div className='viewport'>
      <div
        className='scroll-container'
        id='scroll-container'
        ref={scrollContainer}
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScroller;
