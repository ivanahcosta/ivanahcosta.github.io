define(['jquery'], function ($) {
  return {
    setActiveLink: function () {
      var pathname = window.location.pathname;
      var activeLink = $('nav a[href="' + pathname + '"]');

      $('nav a').removeClass('active');
      activeLink.addClass('active');
    },
    init: function () {
      this.setActiveLink();
    },
  };
});
