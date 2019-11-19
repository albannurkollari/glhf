const { loader: MiniCssExtractLoader } = require('mini-css-extract-plugin');

const PARSE_REACT_JS_JSX = ({ isProduction = false } = {}) => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      cacheCompression: false,
      envName: isProduction ? 'production' : 'development'
    }
  }
});
const PARSE_CSS = ({ isProduction = false } = {}) => ({
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
  PARSE_REACT_JS_JSX(...args),
  PARSE_CSS(...args),
  PARSE_IMAGES,
  PARSE_SVG
];
