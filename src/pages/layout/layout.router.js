import tpl from './layout.tpl.html';

// eslint-disable-next-line no-unused-vars
function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise($injector => {
    const $state = $injector.get('$state');
    $state.go('app.home');
  });

  $stateProvider.state('app', {
    url: '',
    template: tpl,
    controller: 'layoutCtrl',
    controllerAs: 'lc',
    abstract: true,
  });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
