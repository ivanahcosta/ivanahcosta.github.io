define(['jquery', 'barba', 'gsap', '../components/loader', '../components/menu'], function ($, barba, gsap, loader, menu) {
  var gsap = gsap.gsap;
  return {
    transitionBarba: function () {
      barba.init({
        transitions: [
          {
            name: 'opacity-transition',
            leave(data) {
              gsap.to(data.current.container, {
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
      barba.hooks.enter(() => {
        setTimeout(function () {
          loader.animation().restart();
          window.scrollTo(0, 0);
          menu.activateMenuLink();
          $('[data-action="toggle-menu"]').removeClass('active');
          $('[data-menu]').hide();
        }, 500);
      });
    },
    init: function () {
      this.transitionBarba();
    },
  };
});
