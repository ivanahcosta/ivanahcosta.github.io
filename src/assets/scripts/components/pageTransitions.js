define(['jquery', 'barba', 'gsap'], function ($, barba, gsap) {
  var gsap = gsap.gsap;
  return {
    basicTransition: function () {
      barba.init({
        transitions: [
          {
            name: 'opacity-transition',
            leave(data) {
              return gsap.to(data.current.container, {
                opacity: 0,
              });
            },
            enter(data) {
              return gsap.from(data.next.container, {
                opacity: 0,
              });
            },
          },
        ],
      });
    },
    init: function () {
      this.basicTransition();
    },
  };
});
