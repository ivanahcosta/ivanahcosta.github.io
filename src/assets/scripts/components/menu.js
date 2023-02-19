define(['jquery', 'gsap', '../components/loader'], function ($, gsap, loader) {
  var gsap = gsap.gsap;
  var menu = $('[data-menu]');
  var menuAction = $('[data-action="toggle-menu"]');
  return {
    toggle: function () {},
    toggleMenu: function () {
      menuAction.on('click', function () {
        if (menuAction.hasClass('active')) {
          loader.animation().restart();
        } else {
          loader.animation().play(1);
        }
        menuAction.toggleClass('active');
        menu.toggle();
      });
    },
    activateMenuLink: function () {
      menu.find('a').removeClass('active');
      menu.find('a[href="' + window.location.pathname + '"]').addClass('active');
    },
    init: function () {
      this.toggleMenu();
      this.activateMenuLink();
    },
  };
});
