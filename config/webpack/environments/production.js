const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path'); // eslint-disable-line

module.exports = _path => ({
  devtool: false,
  output: {
    path: path.resolve(_path, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
