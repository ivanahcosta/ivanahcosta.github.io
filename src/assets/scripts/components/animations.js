import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

const loader = () => {
  const timeline = gsap.timeline();
  timeline.from('[data-loader-text] > div', {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 1,
  });
  timeline.to('[data-loader]', {
    yPercent: -100,
    duration: 1,
  });
  return timeline;
};
const header = () => {
  const timeline = gsap.timeline();
  timeline.from('#header', {
    opacity: 0,
    duration: 1,
    delay: 2,
  });
  return timeline;
};
const about = () => {
  const timeline = gsap.timeline();
  timeline.from('#about [data-about-text]', {
    opacity: 0,
    duration: 1,
    delay: 2,
  });
  return timeline;
};
const hero = () => {
  const text = Splitting({ target: '#about [data-hero] div', by: 'chars' });
  const timeline = gsap.timeline();
  timeline.from(text[0].chars, {
    opacity: 0,
    yPercent: 100,
    stagger: 0.1,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: '#about',
    },
  });
  timeline.to('[data-hero]', { xPercent: -100, repeat: -1, duration: 30 }, '=<');
  return timeline;
};
const line = () => {
  let lines = gsap.utils.toArray('[data-line]');
  return lines.forEach((line, i) => {
    gsap.from(line, {
      opacity: 0,
      scaleX: 0,
      y: 10,
      transformOrigin: 'left',
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: line,
        start: '10% bottom',
      },
    });
  });
};
const heading = () => {
  const headings = gsap.utils.toArray('[data-section-heading]');
  headings.forEach((heading, i) => {
    gsap.from($(heading).find('> div'), {
      opacity: 0,
      y: 10,
      stagger: 0.3,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: heading,
        start: '10% bottom',
      },
    });
  });
};
const projects = () => {
  const projects = gsap.utils.toArray('[data-project]');
  projects.forEach((project, i) => {
    gsap.from($(project).find('[data-project-heading]'), {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      delay: 1,
      clearProps: true,
      scrollTrigger: {
        trigger: project,
        start: '50% bottom',
      },
    });
  });
};
const contact = () => {
  // // email
  gsap.from('[data-contact-mail] > div', {
    opacity: 0,
    y: 10,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: '#contact',
    },
  });
  // badge
  gsap.from('[data-contact-badge] svg', {
    rotate: '360deg',
    duration: 20,
    repeat: -1,
    ease: 'linear',
    delay: 1,
    scrollTrigger: {
      trigger: '#contact',
    },
  });
  $('body').on('mousemove', '[data-contact-mail]', function (e) {
    gsap.to('[data-contact-badge]', {
      duration: 0.3,
      x: ((e.pageX - $(this).offset().left - $(this).width() / 2) / $(this).width()) * 300,
      y: ((e.pageY - $(this).offset().top - $(this).height() / 2) / $(this).height()) * 100,
      ease: 'linear',
    });
  });
};
const footer = () => {
  const timeline = gsap.timeline();
  timeline.from('#footer .container > div', {
    opacity: 0,
    y: 10,
    stagger: 0.1,
    duration: 1,
    delay: 1,
  });
  return timeline;
};

export default () => {
  console.log('animations');

  loader();
  header();
  about();
  hero();
  line();
  heading();
  projects();
  contact();
  footer();
};
