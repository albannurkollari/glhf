const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getSharedPlugins = require('../shared/plugins');

module.exports = ({isProduction = false} = {}) => [
  new HtmlWebpackPlugin({template: path.resolve('./src/web/index.html'), inject: true}),
  isProduction &&
  new MiniCssExtractPlugin({
    filename: 'assets/css/[name].[contenthash:8].css',
    chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css'
  }),
  ...getSharedPlugins({isProduction})
].filter(Boolean);
