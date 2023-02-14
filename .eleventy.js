module.exports = function (config) {
  config.addLayoutAlias('base', 'base.njk');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_includes/layouts',
    },
  };
};
