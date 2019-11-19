const path = require("path");
const getPlugins = require("./plugins");
const getRules = require("./rules");
const getOptmization = require("./optimization");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    context: path.resolve(__dirname, "src"),
    devtool: isDevelopment && "cheap-module-source-map",
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true
    },
    entry: {
      main: path.resolve("./src/main.js")
    },
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: process.env.PUBLIC_PATH || '',
      filename: "assets/js/[name].[contenthash:8].js"
    },
    module: { rules: getRules({ isProduction }) },
    optimization: getOptmization({ isProduction }),
    plugins: getPlugins({ isProduction }),
    resolve: {
      modules: [
        path.resolve("./src"),
        path.resolve('./node_modules')
      ],
      extensions: [".js", ".jsx"]
    }
  };
};
