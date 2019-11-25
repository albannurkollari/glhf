const getPlugins = require("./plugins");
const getRules = require("./rules");
const getOptmization = require("../shared/optimization");
const PATHS = require('../shared/paths');

module.exports = ({ isProduction = false } = {}) => {
  debugger;

  return {
    context: PATHS.SRC,
    devtool: !isProduction && "source-map",
    devServer: {
      compress: true,
      clientLogLevel: "silent",
      historyApiFallback: true,
      overlay: true,
      noInfo: true,
      publicPath: PATHS.PUBLIC
    },
    entry: { app: ['webpack-hot-middleware/client', PATHS.APP] },
    mode: isProduction ? 'production' : 'development',
    module: { rules: getRules({ isProduction }) },
    optimization: getOptmization({ isProduction }),
    output: {
      path: PATHS.BUILD,
      publicPath: PATHS.PUBLIC,
      filename: "assets/web/[name].[hash:8].js"
    },
    plugins: getPlugins({ isProduction }),
    resolve: {
      modules: [PATHS.SRC, PATHS.MODULES],
      extensions: [".js", ".jsx"]
    }
  };
};
