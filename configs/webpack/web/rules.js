const {loader: MiniCssExtractLoader} = require('mini-css-extract-plugin');
const getSharedRules = require('../shared/rules');

const PARSE_CSS = ({isProduction = false} = {}) => ({
  test: /\.css$/,
  use: [
    {loader: MiniCssExtractLoader, options: {hot: !isProduction}},
    {
      loader: 'css-loader',
      options: {modules: {mode: 'global'}}
    }
  ]
});
const PARSE_IMAGES = {
  test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'static/media/[name].[hash:8].[ext]'
    }
  }
};
const PARSE_SVG = {
  test: /\.svg$/,
  use: ['@svgr/webpack']
};
const PARSE_HTML = {
  test: /\.html$/,
  use: ['html-loader']
};

module.exports = (...args) => [
  ...getSharedRules(...args),
  PARSE_CSS(...args),
  PARSE_HTML,
  PARSE_IMAGES,
  PARSE_SVG
];
