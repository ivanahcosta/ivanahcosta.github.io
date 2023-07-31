const Image = require('@11ty/eleventy-img');

module.exports = {
  image: async (src, alt, sizes, cls) => {
    const srcPath = src.includes('http') ? src : `./src/assets/images/${src}`;
    let metadata = await Image(srcPath, {
      widths: [500],
      formats: ['webp'],
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
