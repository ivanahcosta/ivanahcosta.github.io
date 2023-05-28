const svgsprite = require('./utils/plugins/svgsprite.js');

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

  config.addNunjucksAsyncShortcode('svgsprite', svgsprite);

  config.addLayoutAlias('base', 'base.njk');

  config.addPassthroughCopy('./src/assets/*/**');

  config.addWatchTarget('./src/styles/');
  config.addWatchTarget('./src/svg/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
