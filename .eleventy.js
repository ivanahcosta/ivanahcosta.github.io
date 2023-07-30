const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const shortcodes = require('./utils/shortcodes.js');

module.exports = function (config) {
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName]);
  });
  Object.keys(shortcodes).forEach((shortcodeName) => {
    config.addShortcode(shortcodeName, shortcodes[shortcodeName]);
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
