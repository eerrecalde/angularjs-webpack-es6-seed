const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = _path => ({
  entry: {
    main: path.resolve(path.join(_path, '/src/index.bootstrap.js')),
  },
  output: {
    path: `${_path}/dist`,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '~': path.resolve(path.join(_path)),
      img: path.resolve(path.join(_path, 'src', 'assets', 'img')),
    },
  },
  module: {
    rules: [
      {
        test: /xdomaincookie\.js/,
        use: ['script-loader'],
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              configFile: './.eslintrc.json',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
              publicPath: 'assets/img/',
            },
          },
        ],
      },
      {
        test: /\.(woff2|woff|ttf|eot|otf|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
            publicPath: 'assets/fonts/',
          },
        },
      },
      {
        test: /\.html$/,
        exclude: [path.resolve(_path, 'src', 'index.html')],
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(_path, 'node_modules')],
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // post css plugins, can be exported to postcss.config.js
              plugins: [
                require('autoprefixer'), // eslint-disable-line
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        angularVendor: {
          test: /[\\/]node_modules[\\/](angular)[\\/]/,
          name: 'angular-vendor',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery',

      moment: 'moment',
      'window.moment': 'moment',

      _: 'underscore',
      'window._': 'underscore',

      CryptoJS: 'crypto-js',
      'window.CryptoJS': 'crypto-js',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      hash: isProduction,
      title: isProduction ? 'Production' : 'Development',
      template: './src/index.html',
      filename: './index.html',
    }),
    new WebpackDeepScopeAnalysisPlugin(),
    new StyleLintPlugin(),
  ],
});
