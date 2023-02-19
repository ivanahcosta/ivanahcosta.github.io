requirejs.config({
  baseUrl: 'assets/scripts/vendors',
  paths: {
    components: '../components',
    jquery: 'jquery',
    lenis: 'lenis',
    barba: 'barba',
    gsap: 'gsap',
  },
});

define(function (require) {
  var loader = require('./components/loader');
  var smoothScroll = require('./components/smoothScroll');
  var pageTransitions = require('./components/pageTransitions');
  var menu = require('./components/menu');
  loader.init();
  smoothScroll.init();
  pageTransitions.init();
  menu.init();
});
