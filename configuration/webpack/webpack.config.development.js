const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const sourcePath = path.join(__dirname, '../../src');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8082',
    'webpack/hot/only-dev-server',
    './index',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
      },
      '/signal': {
        target: 'ws://localhost:8081',
        ws: true,
      },
    },
  },
});
