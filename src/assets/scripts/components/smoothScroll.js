import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

export default () => {
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  $('a[href^="#"]').each((i, anchor) => {
    $(anchor).on('click', function (e) {
      e.preventDefault();
      lenis.scrollTo(this.getAttribute('href'));
    });
  });
};
