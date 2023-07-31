import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

const splitTexts = () => {
  Splitting({ target: '[data-about-hero-text]', by: 'chars' });
};

const loader = () => {
  const tl = gsap.timeline();
  tl.to('[data-loader-curtain-text] > *', {
    opacity: 1,
    y: 0,
    duration: 1,
  });
  tl.to('[data-loader-curtain]', {
    yPercent: -100,
    duration: 1,
    delay: 1,
  });
  return tl;
};

const fadeIn = () => {
  ScrollTrigger.batch('#header .container > *, [data-about-background], [data-section-heading] > *, #footer .container:last-child > *', {
    start: '10% bottom',
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      });
    },
  });
};

const lines = () => {
  ScrollTrigger.batch('[data-section-line], [data-line]', {
    start: '10% bottom',
    onEnter: (batch) => {
      gsap.to(batch, {
        scaleX: 1,
        transformOrigin: 'left',
        stagger: 0.1,
        duration: 1,
      });
    },
  });
};

const hero = () => {
  gsap.to('[data-about-hero-text]', { xPercent: -100, repeat: -1, duration: 30, ease: 'linear' });
  gsap.to('[data-about-hero-text] .char', {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
  });
};

const projects = () => {
  ScrollTrigger.batch('[data-project-heading]', {
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
      });
    },
  });
};

const lists = () => {
  ScrollTrigger.batch('[data-list]', {
    start: '10% bottom',
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      });
    },
  });
};

const contact = () => {
  gsap.to('[data-contact-mail] span', {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '#contact',
    },
  });
  gsap.to('[data-contact-badge]', {
    opacity: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: '#contact',
    },
  });
  gsap.from('[data-contact-badge] svg', {
    rotate: '360deg',
    duration: 10,
    repeat: -1,
    ease: 'linear',
    scrollTrigger: {
      trigger: '#contact',
    },
  });

  $('[data-contact]').on('mousemove', function (e) {
    const relX = e.pageX - $(this).offset().left;
    const relY = e.pageY - $(this).offset().top;

    gsap.to('[data-contact-badge]', {
      x: ((relX - $(this).width() / 2) / $(this).width()) * 160,
      y: ((relY - $(this).height() / 2) / $(this).height()) * 80,
      duration: 1,
    });
  });
};

export default () => {
  console.log('Animations');

  splitTexts();
  $('[data-about-hero-text]').clone().appendTo('[data-about-hero]');

  loader().then(() => {
    console.log('Loader finished');
    fadeIn();
    lines();
    hero();
    projects();
    lists();
    contact();
  });
};
