requirejs.config({
  baseUrl: '/assets/scripts/vendors',
  paths: {
    components: '../components',
  },
});

define(function (require) {
  var smoothScroll = require('components/smoothScroll');
  smoothScroll.init();
  var transitions = require('components/transitions');
  transitions.init();
  var menu = require('components/menu');
  menu.init();
  var projects = require('components/projects');
  projects.init();
});
