const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

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
  },
  runtimeChunk: 'single'
});
