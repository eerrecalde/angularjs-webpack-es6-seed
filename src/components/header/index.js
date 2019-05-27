import angular from 'angular';
import headerDrv from './header.directive';

export default angular.module('app.components.header', []).directive('headerComponent', headerDrv);
