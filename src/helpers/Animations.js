import gsap from 'gsap';

// Reveal Menu
export const staggerMenuReveal = (...nodes) => {
  gsap.from([...nodes], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1
    }
  });
};

// Hide menu
export const staggerMenuHide = (...nodes) => {
  gsap.to([...nodes], {
    duration: 0.8,
    height: 0,
    delay: 0.5,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07
    }
  });
};

export const staggerTextReveal = (...nodes) => {
  gsap.from([...nodes], {
    duration: 0.8,
    y: 135,
    delay: 0.4,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3
    }
  });
  gsap.to([...nodes], {
    duration: 0.8,
    opacity: 1,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3
    }
  });
};

export const staggerTextHide = (...nodes) => {
  gsap.to([...nodes], {
    duration: 0.8,
    opacity: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3
    }
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: 'power1.inOut'
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: 'power1.inOut'
  });
};

export const revealHeadings = (...nodes) => {
  gsap.from([...nodes], {
    duration: 1.4,
    delay: 2.4,
    ease: 'power3.out',
    y: 55,
    stagger: {
      amount: 0.09
    }
  });
};

export const revealParagraph = paragraph => {
  gsap.from(paragraph, {
    duration: 1.4,
    y: 110,
    ease: 'power3.out',
    delay: 2.3
  });
};

export const revealImage = (background1, background2, image) => {
  gsap.to([background1, background2], {
    duration: 1.4,
    width: '0%',
    ease: 'power3.inOut',
    delay: 1.2,
    stagger: {
      amount: -0.09
    }
  });
  gsap.from(image, {
    duration: 1.4,
    scale: 1.6,
    ease: 'power3.inOut',
    delay: 1
  });
};

export const revealButtons = background => {
  gsap.to([background], {
    duration: 1.4,
    width: '0',
    x: '-110%',
    // skewX: 2,
    ease: 'power3.out',
    delay: 1.2,
    stagger: {
      amount: -0.09
    }
  });
};
