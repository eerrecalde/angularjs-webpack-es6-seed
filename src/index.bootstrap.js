import $ from 'jquery';

import './dependencies';
import app from './index.module';

// Styles
import './assets/scss/index.scss';

import(/* webpackChunkName: "angular" */ 'angular').then(angular => {
  setTimeout(() => {
    angular.element(document).ready(() => {
      if (typeof WebSocket !== 'function' && typeof WebSocket !== 'object') {
        $('body').html(
          '' +
            '<h1>Error</h1>' +
            '<p>You browser is not supported.  Please update your browser to the latest version.</p>' +
            '',
        );
        return;
      }
      angular.bootstrap(document, [app.name]);
    });
  }, 500);
});
