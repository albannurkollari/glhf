const getPlugins = require('./plugins');
const getRules = require('./rules');
const getOptmization = require('../shared/optimization');
const {projectPaths: PATHS} = process;

/* const stats = {
  colors: false,
  hash: false,
  timings: true,
  assets: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: false
}; */

const stats = 'minimal';

module.exports = ({isProduction = false} = {}) => ({
  context: PATHS.SRC,
  devtool: !isProduction && 'source-map',
  devServer: {
    compress: true,
    clientLogLevel: 'silent',
    historyApiFallback: true,
    overlay: true,
    publicPath: PATHS.PUBLIC,
    stats
  },
  entry: {app: ['webpack-hot-middleware/client', PATHS.APP]},
  mode: isProduction ? 'production' : 'development',
  module: {rules: getRules({isProduction})},
  optimization: getOptmization({isProduction}),
  output: {
    path: PATHS.BUILD,
    publicPath: PATHS.PUBLIC,
    filename: 'assets/web/[name].[hash:8].js'
  },
  plugins: getPlugins({isProduction}),
  resolve: {
    modules: [PATHS.SRC, PATHS.MODULES],
    extensions: ['.js', '.jsx']
  },
  stats
});
