const path = require('path');
const webpackMerge = require('webpack-merge');

const config = {
  // global section
  global: require(path.join(__dirname, '/config/webpack/global')), // eslint-disable-line

  // config by environments
  production: require(path.join(__dirname, '/config/webpack/environments/production')), // eslint-disable-line
  development: require(path.join(__dirname, '/config/webpack/environments/development')), // eslint-disable-line
};

module.exports = () => {
  const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

  console.log('Current Environment: ', ENV);

  return webpackMerge({ mode: ENV }, config.global(__dirname), config[ENV](__dirname));
};
