define(['jquery', 'gsap', 'ScrollTrigger'], function ($, gsap, ScrollTrigger) {
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  return {
    heroText: function () {},
    radial: function () {
      return gsap.to('[data-radial]', {
        opacity: 0,
        scrollTrigger: {
          trigger: '#projects',
          scrub: true,
          end: 'top top',
        },
      });
    },
    init: function () {
      this.radial();
    },
  };
});
