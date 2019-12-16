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
  gsap.from([...nodes], 0.8, {
    delay: 0.8,
    ease: 'power3.out',
    y: 55,
    stagger: {
      amount: 0.09
    }
  });
};
