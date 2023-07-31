const htmlmin = require('html-minifier');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  htmlmin: function (content) {
    if (!isDev && this.page.outputPath && this.page.outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  },
};
