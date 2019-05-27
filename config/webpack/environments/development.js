const webpack = require('webpack'); // eslint-disable-line

module.exports = _path => ({
  context: _path,
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
});
