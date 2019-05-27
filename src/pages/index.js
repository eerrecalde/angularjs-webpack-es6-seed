import angular from 'angular';
import layout from './layout';
import home from './home';

export default angular.module('app.pages', [layout.name, home.name]);
