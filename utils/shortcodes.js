const Image = require('@11ty/eleventy-img');

module.exports = {
  svg: function (name, classes) {
    return `<svg class="icon icon--${name} ${classes}" role="img" aria-hidden="true">
                <use xlink:href="#icon-${name}"></use>
            </svg>`;
  },
  image: async function (src, alt, sizes, cls) {
    const srcPath = src.includes('http') ? src : `./src/assets/images/${src}`;
    let metadata = await Image(srcPath, {
      widths: [300, null],
      formats: 'auto',
      urlPath: '/assets/images/',
      outputDir: './dist/assets/images/',
    });

    let imageAttributes = {
      class: cls,
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
  },
};
