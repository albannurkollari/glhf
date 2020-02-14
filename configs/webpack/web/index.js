require('../../../paths');
const getPlugins = require('./plugins');
const getRules = require('./rules');
const getOptmization = require('../shared/optimization');

const stats = 'minimal';

module.exports = envProd => {
  const isProduction = Boolean(envProd);

  return {
    isProduction,
    context: process.paths.SRC,
    devtool: !isProduction && 'source-map',
    devServer: {
      compress: true,
      clientLogLevel: 'silent',
      historyApiFallback: true,
      overlay: true,
      publicPath: process.paths.PUBLIC,
      stats
    },
    entry: {
      app: isProduction
        ? process.paths.APP
        : ['webpack-hot-middleware/client', process.paths.APP]
    },
    mode: isProduction ? 'production' : 'development',
    module: {rules: getRules({isProduction})},
    optimization: getOptmization({isProduction}),
    output: {
      path: process.paths.BUILD,
      publicPath: process.paths.PUBLIC,
      filename: 'assets/web/[name].[hash:8].js'
    },
    plugins: getPlugins({isProduction}),
    resolve: {
      modules: [process.paths.SRC, process.paths.MODULES],
      extensions: ['.js', '.jsx']
    },
    stats
  };
};
