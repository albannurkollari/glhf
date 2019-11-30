const {EnvironmentPlugin} = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = ({isProduction = false} = {}) => [
  new WebpackBar(),
  new EnvironmentPlugin({NODE_ENV: isProduction ? 'production' : 'development'})
];
