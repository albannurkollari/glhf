const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const getSharedPlugins = require("../shared/plugins");
const PATHS = require("../shared/paths");

module.exports = ({ isProduction = false } = {}) =>
  [
    new HtmlWebpackPlugin({
      template: PATHS.DEB_WEB
    }),
    new HotModuleReplacementPlugin(),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].[contenthash:8].css",
        chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
      }),
    ...getSharedPlugins({ isProduction })
  ].filter(Boolean);
