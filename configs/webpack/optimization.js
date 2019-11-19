const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

// Constants
const { REGEX_PACKAGE_NAME, REGEX_NODE_MODULES } = require('../../regex');

module.exports = ({isProduction = false} = {}) => ({
  minimize: isProduction,
  minimizer: [
    // Minify your JavaScript
    new TerserWebpackPlugin({
      terserOptions: {
        compress: { comparisons: false },
        mangle: { safari10: true },
        output: { comments: false, ascii_only: true },
        warnings: false
      }
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      }
    })
  ],
  splitChunks: {
    chunks: 'all',
    minSize: 0,
    maxInitialRequests: 10,
    maxAsyncRequests: 10
    /* cacheGroups: {
      vendors: {
        test: REGEX_PACKAGE_NAME,
        name: ({context}, _, cacheGroupKey) => {
          const match = context.match(REGEX_NODE_MODULES);
          const [, packageName] = match;

          console.log(match);

          return '';

          return `${cacheGroupKey}.${packageName.replace('@', '')}`;
        }
      },
      common: { minChunks: 2, priority: -10 }
    } */
  },
  runtimeChunk: 'single'
});
