define(['jquery', 'gsap', 'ScrollTrigger'], function ($, gsap, ScrollTrigger) {
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  return {
    bodyColor: function () {
      gsap.to('body', {
        backgroundColor: '#78716c',
        scrollTrigger: {
          trigger: '#footer',
          toggleActions: 'play none reverse reverse',
        },
      });
    },
    init: function () {
      this.bodyColor();
    },
  };
});
