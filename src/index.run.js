/* eslint-disable no-unused-vars */
function runBlock($rootScope, $window) {
  const rootScope = $rootScope;

  rootScope.$on('$stateChangeSuccess', () => {
    $window.scrollTo(0, 0);
  });
}

runBlock.$inject = ['$rootScope', '$window'];

export default runBlock;
