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
    delay: 0.2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07
    }
  });
};

export const staggerTextReveal = (...nodes) => {
  setTimeout(() => {
    gsap.set([...nodes], {
      visibility: 'visible'
    });
  }, 800);
  gsap.from([...nodes], {
    duration: 0.8,
    y: 90,
    delay: 0.4,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.4
    }
  });
  gsap.to([...nodes], {
    duration: 0.8,
    opacity: 1,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1
    }
  });
};

export const staggerTextHide = (...nodes) => {
  gsap.to([...nodes], {
    duration: 0.5,
    opacity: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3
    }
  });
  setTimeout(() => {
    gsap.set([...nodes], {
      visibility: 'hidden'
    });
  }, 500);
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
  gsap.set([...nodes], {
    visibility: 'visible'
  });
  gsap.from([...nodes], {
    duration: 1.4,
    delay: 0.3,
    ease: 'power3.out',
    y: 55,
    stagger: {
      amount: 0.09
    }
  });
};

export const revealParagraph = paragraph => {
  gsap.set(paragraph, {
    visibility: 'visible'
  });
  gsap.from(paragraph, {
    duration: 1.4,
    delay: 0.5,
    y: '100%',
    ease: 'power3.out'
  });
};

export const revealImage = (background1, background2, image) => {
  gsap.to([background1.parentElement], {
    duration: 1.1,
    ease: 'power3.inOut'
  });
  gsap.to([background1, background2], {
    duration: 1.4,
    width: '0%',
    ease: 'power3.inOut',
    delay: 1,
    stagger: {
      amount: -0.09
    }
  });
  gsap.from(image, {
    duration: 1.4,
    scale: 1.6,
    ease: 'power3.inOut',
    delay: 1.2
  });
};

export const revealButtons = background => {
  if (background) {
    gsap.from([background.parentElement], {
      duration: 1.1,
      ease: 'power3.inOut'
    });
  }
  gsap.to([background], {
    duration: 1.3,
    width: '0',
    ease: 'power3.inOut',
    delay: 0.8,
    stagger: {
      amount: -0.09
    }
  });
};
