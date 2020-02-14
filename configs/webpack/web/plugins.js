const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {HotModuleReplacementPlugin} = require("webpack");
const getSharedPlugins = require("../shared/plugins");

module.exports = ({isProduction = false} = {}) =>
  [
    new HtmlWebpackPlugin({template: process.paths.DEV_WEB}),
    new HotModuleReplacementPlugin(),
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/web/css/[name].[contenthash:8].css",
      chunkFilename: "assets/web/css/[name].[contenthash:8].chunk.css"
    }),
    ...getSharedPlugins({isProduction})
  ].filter(Boolean);
