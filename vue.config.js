module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 1000,
        maxSize: 250000,
      },
    },
  },
};
