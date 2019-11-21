const path = require('path');
const getPlugins = require('./plugins');
const getRules = require('./rules');
const getOptmization = require('../shared/optimization');

module.exports = (_, {mode = 'development'} = {}) => {
  const isDevelopment = mode === 'development';
  const isProduction = !isDevelopment;

  return {
    context: path.resolve(__dirname, 'src'),
    devtool: isDevelopment && 'cheap-module-source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true
    },
    entry: {main: path.resolve('./src/web/main.js')},
    module: {rules: getRules({isProduction})},
    optimization: getOptmization({isProduction}),
    output: {
      path: path.resolve('build'),
      publicPath: process.env.PUBLIC_PATH || '',
      filename: 'assets/web/js/[name].[contenthash:8].js'
    },
    plugins: getPlugins({isProduction}),
    resolve: {
      modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
      ],
      extensions: ['.js', '.jsx']
    },
    target: 'web'
  };
};
