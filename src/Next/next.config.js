const withLess = require('@zeit/next-less');

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:5]",
  }
});
