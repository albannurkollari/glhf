const {loader: MiniCssExtractLoader} = require('mini-css-extract-plugin');
const getSharedRules = require('../shared/rules');

const PARSE_CSS = ({isProduction = false} = {}) => ({
  test: /\.css$/,
  use: [isProduction ? MiniCssExtractLoader : 'style-loader', 'css-loader']
});
const PARSE_IMAGES = {
  test: /\.(png|jpg|gif)$/i,
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

module.exports = (...args) => [
  ...getSharedRules(...args),
  PARSE_CSS(...args),
  PARSE_IMAGES,
  PARSE_SVG
];
