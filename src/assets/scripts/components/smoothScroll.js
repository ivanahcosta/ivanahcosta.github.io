define(['jquery', 'lenis'], function ($, lenis) {
  var smooth = new lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  return {
    scroll: function () {
      function raf(time) {
        smooth.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    },
    init: function () {
      this.scroll();
    },
  };
});
