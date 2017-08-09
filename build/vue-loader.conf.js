const utils = require('./utils');
const config = require('../config');

const isProduction = process.env.NODE_ENV === 'production';
const _webpackConfig = require('../config/_config');

module.exports = {
  loaders: _webpackConfig.extend(utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }), {
    i18n: _webpackConfig.i18nConfig
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
