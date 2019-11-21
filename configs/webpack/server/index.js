const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const getRules = require('./rules');
const getOptmization = require('../shared/optimization');
const getSharedPlugins = require('../shared/plugins');

module.exports = (_, {mode = 'development'} = {}) => {
  const isDevelopment = mode === 'development';
  const isProduction = !isDevelopment;

  return {
    context: path.resolve(__dirname, 'src'),
    entry: {main: path.resolve('./src/server/index.js')},
    externals: [nodeExternals()],
    module: {rules: getRules({isProduction})},
    node: {__dirname: false, __filename: false},
    optimization: getOptmization({isProduction}),
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: process.env.PUBLIC_PATH || '',
      filename: 'assets/js/[name].[contenthash:8].js'
    },
    plugins: getSharedPlugins({isProduction}),
    resolve: {
      modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
      ],
      extensions: ['.js', '.jsx']
    },
    target: 'node'
  }
};
