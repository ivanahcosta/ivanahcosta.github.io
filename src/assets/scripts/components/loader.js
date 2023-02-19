define(['jquery', 'gsap'], function ($, gsap) {
  var gsap = gsap.gsap;
  return {
    animation: function () {
      var loaderTl = gsap.timeline();
      loaderTl
        .to('[data-loader-mask]', {
          scaleY: 0.01,
          transformOrigin: 'top',
        })
        .addPause();
      loaderTl.to('[data-loader-mask]', {
        scaleY: 0,
        transformOrigin: 'top',
      });
      loaderTl.to('[data-loader-mask]', {
        scaleY: 1,
        transformOrigin: 'bottom',
      });
      return loaderTl;
    },
    init: function () {
      this.animation();
    },
  };
});
