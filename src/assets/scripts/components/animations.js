define(['jquery', 'gsap', 'ScrollTrigger'], function ($, gsap, ScrollTrigger) {
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  return {
    init: function () {
      gsap.utils.toArray('[data-project]').forEach((project, i) => {
        gsap.to(project, {
          keyframes: {
            opacity: [0.2, 0.3, 1, 0.3, 0.2],
          },
          scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // gsap.utils.toArray('[data-project]').forEach((project, i) => {
      //   gsap.from(project, {
      //     scrollTrigger: {
      //       trigger: project,
      //       start: 'top center',
      //       end: 'bottom center',
      //       toggleClass: 'active',
      //     },
      //   });
      // });
    },
  };
});
