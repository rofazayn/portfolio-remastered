import gsap from 'gsap';

// OPEN MENU
export const staggerReveal = (...nodes) => {
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

// CLOSE MENU
export const staggerRevealClose = (...nodes) => {
  gsap.to([...nodes], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07
    }
  });
};

export const staggerText = (...nodes) => {
  gsap.from([...nodes], {
    duration: 0.8,
    y: 135,
    opacity: 0,
    delay: 0.5,
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
