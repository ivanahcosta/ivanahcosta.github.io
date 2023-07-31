const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const shortcodes = require('./utils/shortcodes.js');

module.exports = function (config) {
  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });
  Object.keys(transforms).forEach((name) => {
    config.addTransform(name, transforms[name]);
  });
  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
  });

  config.addLayoutAlias('base', 'base.njk');

  config.addPassthroughCopy('./src/assets/fonts');
  config.addPassthroughCopy('./src/assets/images/seo');

  config.addWatchTarget('./src/assets/styles/');
  config.addWatchTarget('./src/assets/scripts/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
