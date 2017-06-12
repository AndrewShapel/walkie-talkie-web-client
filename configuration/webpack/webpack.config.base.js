const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, '../../src');
const buildPath = path.join(__dirname, '../../dist');
const modulesPath = path.join(__dirname, '../../node_modules');

module.exports = {
  context: sourcePath,
  output: {
    filename: '[name].js',
    path: buildPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?modules&importLoaders=1',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import')(),
                require('postcss-url')(),
                require('postcss-cssnext')(),
                require('postcss-reporter')(),
              ],
            },
          }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ],
      },
      {
        test: /\.gql$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      modulesPath,
      sourcePath,
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production',
      __ENDPOINT__: JSON.stringify(process.env.ENDPOINT || '/api'),
      __SIGNAL__: JSON.stringify(process.env.SIGNAL || '/signal'),
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
