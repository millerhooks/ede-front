angular.module('edepo.home', [
  'ui.router',
  'edepo.common'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.home', {
        url: 'home',
        templateUrl: 'home/home.tpl.html'
      })
    ;
  })
;
