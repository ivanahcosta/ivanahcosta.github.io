define(['jquery', 'gsap', 'ScrollTrigger'], function ($, gsap, ScrollTrigger) {
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  return {
    init: function () {
      console.log('animations');
    },
  };
});
