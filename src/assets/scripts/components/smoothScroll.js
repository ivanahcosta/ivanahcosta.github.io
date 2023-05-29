define(['jquery', 'lenis'], function ($, lenis) {
  var smoothness = new lenis({
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
        smoothness.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    },
    anchors: function () {
      $('a[href^="#"]').each((i, anchor) => {
        $(anchor).on('click', function (e) {
          e.preventDefault();
          smoothness.scrollTo(this.getAttribute('href'), {
            offset: -20,
          });
        });
      });
    },
    init: function () {
      window.smoothness = smoothness;

      this.scroll();
      this.anchors();
    },
  };
});
