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
    scrollToBottom: function () {
      $('[data-action="scroll-to-bottom"]').on('click', function (e) {
        smooth.scrollTo('[data-footer]');
      });
    },
    scrollToTop: function () {
      $('[data-action="scroll-to-header"]').on('click', function (e) {
        smooth.scrollTo('[data-header]');
      });
    },
    minimap: function () {
      smooth.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        $('input').val(progress * 100);
      });
      $('input').on('input', function () {
        smooth.scrollTo(document.documentElement.scrollHeight * ($(this).val() / 100));
      });
    },
    init: function () {
      this.scroll();
      this.scrollToBottom();
      this.scrollToTop();
      this.minimap();
    },
  };
});
