import tpl from './home.tpl.html';

function config($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/home',
    template: tpl,
    controller: 'homeCtrl',
    controllerAs: 'homeCtrl',
    data: {
      meta: {
        title: 'Home',
        description: 'Home page descr',
      },
    },
  });
}

config.$inject = ['$stateProvider'];

export default config;
