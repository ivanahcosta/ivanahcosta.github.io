const htmlmin = require('html-minifier');

module.exports = {
  htmlmin: function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
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
