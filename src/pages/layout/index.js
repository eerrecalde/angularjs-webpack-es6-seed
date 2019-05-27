import angular from 'angular';
import controller from './layout.controller';
import router from './layout.router';

export default angular
  .module('app.pages.layout', [])
  .controller('layoutCtrl', controller)
  .config(router);
