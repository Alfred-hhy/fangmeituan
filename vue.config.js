module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-pxtorem')({ rootValue: 37.5 })],
      },
    },
  },
};
