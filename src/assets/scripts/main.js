requirejs.config({
  baseUrl: '/assets/scripts/vendors',
  paths: {
    components: '../components',
    jquery: 'jquery',
    lenis: 'lenis',
    barba: 'barba',
    gsap: 'gsap',
    ScrollTrigger: 'ScrollTrigger',
    splittype: 'splittype',
  },
});

define(function (require) {
  var smoothScroll = require('./components/smoothScroll');
  var animations = require('./components/animations');
  var menu = require('./components/menu');
  var schedule = require('./components/schedule');
  smoothScroll.init();
  animations.init();
  menu.init();
  schedule.init();
});
