define(['jquery', 'barba', 'gsap', '../components/smoothScroll', '../components/menu'], function ($, barba, gsap, smoothScroll, menu) {
  var gsap = gsap.gsap;

  return {
    init: function () {
      barba.init({
        preventRunning: true,
        transitions: [
          {
            name: 'default',
            once(data) {},
            leave(data) {},
            enter(data) {},
          },
        ],
      });
      barba.hooks.enter(() => {
        window.scrollTo(0, 0);
        menu.setActiveLink();
        smoothScroll.anchors();
      });
    },
  };
});
