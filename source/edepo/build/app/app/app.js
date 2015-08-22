angular.module('edepo', [
    'templates-app',
    'ui.router',
    'edepo.account',
    'edepo.activity-stream',
    'edepo.cases',
    'edepo.scheduling',
    'edepo.home'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('app', {
            url: '/',
            abstract: true,
            templateUrl: 'app.tpl.html',
            controller: 'AppCtrl as app',
            edepoBreadcrumb: {
                skip: true
            }
        });

        $urlRouterProvider.otherwise('/');
        // Needs serverside rewriting
        //$locationProvider.html5Mode(true);
    })
    .controller('AppCtrl', function () {
        var app = this;
    })
;

