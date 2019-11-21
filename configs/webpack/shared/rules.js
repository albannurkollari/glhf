const PARSE_REACT_JS_JSX = ({isProduction = false} = {}) => ({
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

module.exports = (...args) => [PARSE_REACT_JS_JSX(...args)];
