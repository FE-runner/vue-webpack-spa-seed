module.exports = {
  devLogConfig: {
    quiet: false,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
  },
  imgMinConfig: {},
  i18nConfig: '@kazupon/vue-i18n-loader',
  scssVarConfig: {
    includePaths: [
      './',
      './src/assets/scss'
    ],
    data: '@import "vars";'
  },
  prodFilter: {
    jsConfig: {
      warnings: false,
      drop_debugger: true,
      drop_console: true,
      conditionals: true,
      comparisons: true,
      loops: true,
      unused: true
    },
    htmlConfig: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  },
  extend(target) {
    const sources = [].slice.call(arguments, 1);
    sources.forEach((source) => {
      Object.keys(source).forEach((item) => {
        target[item] = source[item];
      });
    });
    return target;
  }
};
