define(['jquery', 'lenis', 'gsap', 'ScrollTrigger'], function ($, Lenis, gsap, ScrollTrigger) {
  var lenis = new Lenis({
    lerp: 1,
  });
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  return {
    init: function () {
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      $('a[href^="/#"]').each((i, anchor) => {
        $(anchor).on('click', function (e) {
          e.preventDefault();
          lenis.scrollTo(this.getAttribute('href').replace('/', ''), {
            offset: -20,
          });
        });
      });
    },
  };
});
