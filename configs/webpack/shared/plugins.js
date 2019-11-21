const {DefinePlugin} = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = ({isProduction = false} = {}) => [
  new WebpackBar(),
  new DefinePlugin({'process.env.NODE_ENV': isProduction ? 'production' : 'development'})
];
