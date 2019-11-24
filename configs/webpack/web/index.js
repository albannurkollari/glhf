const getPlugins = require("./plugins");
const getRules = require("./rules");
const getOptmization = require("../shared/optimization");
const PATHS = require('../shared/paths');

module.exports = (_, { mode = "development" } = {}) => {
  const isDevelopment = mode === "development";
  const isProduction = !isDevelopment;

  return {
    context: PATHS.SRC,
    devtool: isDevelopment && "source-map",
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true
    },
    entry: { app: PATHS.APP },
    mode,
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
