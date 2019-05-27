// config
import angular from 'angular';
import appConfig from './config';
import runBlock from './index.run';
import appendConstants from './utilities/append-constants';

// App specific
import pages from './pages';
import components from './components';

const angularDependencies = ['ngAnimate', 'ui.router', 'ngCookies'];

// Create and bootstrap application
const requires = angularDependencies.concat([components.name, pages.name]);

/* eslint-disable no-param-reassign */
let app = angular.module('app', requires); // eslint-disable-line

appConfig(app, process.env.NODE_ENV);

app = appendConstants(app);

app.run(runBlock);

export default app;
