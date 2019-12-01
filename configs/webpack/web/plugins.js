const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {HotModuleReplacementPlugin} = require("webpack");
const getSharedPlugins = require("../shared/plugins");
const {projectPaths: PATHS} = process;

module.exports = ({isProduction = false} = {}) =>
  [
    new HtmlWebpackPlugin({template: PATHS.DEV_WEB}),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/web/css/[name].[contenthash:8].css",
      chunkFilename: "assets/web/css/[name].[contenthash:8].chunk.css"
    }),
    ...getSharedPlugins({isProduction})
  ].filter(Boolean);
