const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = ({ isProduction = false } = {}) =>
  [
    new WebpackBar(),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css'
      }),
    new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
    new DefinePlugin({'process.env.NODE_ENV': isProduction ? 'production' : 'development'})
  ].filter(Boolean);
