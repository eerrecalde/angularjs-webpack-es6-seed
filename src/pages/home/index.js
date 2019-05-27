import angular from 'angular';
import router from './home.router';
import controller from './home.controller';

export default angular
  .module('app.pages.home', [])
  .controller('homeCtrl', controller)
  .config(router);
