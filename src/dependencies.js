import(/* webpackChunkName: "chunky-stuff", webpackPrefetch: true */ '@uirouter/angularjs');

// jquery
import(/* webpackChunkName: "chunky-stuff", webpackPrefetch: true */ 'jquery'); // Loaded from the index file because of an issue with angularj)s

// Polyfill
import(/* webpackChunkName: "rest-of-stuff", webpackPrefetch: 1 */ 'promise-polyfill');

import(/* webpackChunkName: "rest-of-stuff", webpackPrefetch: 1 */ 'popper.js');

// bootstrap
import(/* webpackChunkNAme: "bootstrap" */ 'bootstrap');

// Angular related dependencies
import(/* webpackChunkName: "angular-deps" */ 'angular-animate');
import(/* webpackChunkName: "angular-deps" */ 'angular-cookies');
import(/* webpackChunkName: "angular-deps" */ 'angular-sanitize');
import(/* webpackChunkName: "angular-deps" */ 'angular-translate');
import(
  /* webpackChunkName: "angular-deps" */ 'angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files'
);
import(
  /* webpackChunkName: "angular-deps" */ 'angular-translate/dist/angular-translate-loader-url/angular-translate-loader-url'
);
import(
  /* webpackChunkName: "angular-deps" */ 'angular-translate/dist/angular-translate-storage-cookie/angular-translate-storage-cookie'
);
import(
  /* webpackChunkName: "angular-deps" */ 'angular-translate/dist/angular-translate-storage-local/angular-translate-storage-local'
);

// fontawesome
import(/* webpackChunkName: "font-awesome" */ '@fortawesome/fontawesome-free/js/solid');
import(/* webpackChunkName: "font-awesome" */ '@fortawesome/fontawesome-free/js/fontawesome');

/* eslint-enable import/no-webpack-loader-syntax */
