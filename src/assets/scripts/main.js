requirejs.config({
  baseUrl: '/assets/scripts/vendors',
  paths: {
    components: '../components',
  },
});

define(function (require) {
  var pageSmoothScroll = require('components/pageSmoothScroll');
  pageSmoothScroll.init();
  var imageEffect = require('components/imageEffect');
  imageEffect.init();
  var index = require('components/index');
  index.init();
});
